import { Client } from '@notionhq/client';
import { 
  BlockObjectResponse, 
  PartialBlockObjectResponse,
  PageObjectResponse,
  PartialPageObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

type NotionBlock = BlockObjectResponse | PartialBlockObjectResponse;
type NotionPage = PageObjectResponse | PartialPageObjectResponse;

type NotionBlockWithChildren = NotionBlock & {
  children?: NotionBlock[];
};

interface RichTextItem {
  plain_text: string;
  [key: string]: unknown;
}

export interface BlogPost {
  id: string;
  title: string;
  publishedDate: string;
  lastEditedTime: string;
  excerpt: string;
  content: NotionBlock[];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const pageId = process.env.NOTION_PAGE_ID;
    if (!pageId || pageId === 'your_notion_page_id_here') {
      console.warn('NOTION_PAGE_ID is not configured properly');
      return [];
    }

    const token = process.env.NOTION_TOKEN;
    if (!token || token === 'your_notion_integration_token_here') {
      console.warn('NOTION_TOKEN is not configured properly');
      return [];
    }

    // Try both methods: database query and child pages
    const posts: BlogPost[] = [];
    
    try {
      // Method 1: Try to query as database
      const databaseResponse = await notion.databases.query({
        database_id: pageId,
        page_size: 100,
      });
      
      console.log('Database query response:', {
        pageId,
        totalResults: databaseResponse.results.length,
        results: databaseResponse.results.map(page => ({
          id: page.id,
          hasProperties: 'properties' in page
        }))
      });
      
      for (const page of databaseResponse.results) {
        if ('properties' in page && 'created_time' in page && 'last_edited_time' in page) {
          // Handle different property structures for database pages
          let title = 'Untitled';
          const titleProp = page.properties.title || page.properties.Name || page.properties.Title;
          if (titleProp && 'title' in titleProp && titleProp.title) {
            title = titleProp.title.map((text: RichTextItem) => text.plain_text).join('');
          }
          
          // Get page content for excerpt
          const contentResponse = await notion.blocks.children.list({
            block_id: page.id,
            page_size: 5,
          });

          const excerpt = extractExcerpt(contentResponse.results);

          const post = {
            id: page.id,
            title,
            publishedDate: page.created_time,
            lastEditedTime: page.last_edited_time,
            excerpt,
            content: [],
          };
          
          posts.push(post);
        }
      }
    } catch (dbError) {
      console.log('Database query failed, trying child pages method:', dbError);
      
      // Method 2: Get child pages of the parent page
      const response = await notion.blocks.children.list({
        block_id: pageId,
        page_size: 100,
      });

      console.log('Child pages response:', {
        pageId,
        totalResults: response.results.length,
        results: response.results.map(block => ({
          id: block.id,
          type: 'type' in block ? block.type : 'unknown',
          hasChildPage: 'type' in block && block.type === 'child_page'
        }))
      });

      for (const block of response.results) {
        if ('type' in block && block.type === 'child_page' && 'child_page' in block) {
          try {
            const pageResponse = await notion.pages.retrieve({
              page_id: block.id,
            });

            if ('properties' in pageResponse) {
              const title = getPlainTextFromRichText(pageResponse.properties.title);
              
              // Get page content for excerpt
              const contentResponse = await notion.blocks.children.list({
                block_id: block.id,
                page_size: 5,
              });

              const excerpt = extractExcerpt(contentResponse.results);

              const post = {
                id: block.id,
                title,
                publishedDate: pageResponse.created_time,
                lastEditedTime: pageResponse.last_edited_time,
                excerpt,
                content: [],
              };
              
              posts.push(post);
            }
          } catch (error) {
            console.error('Error processing page', block.id, ':', error);
          }
        }
      }
    }

    console.log('Final posts count:', posts.length);
    // Sort by creation date (newest first)
    return posts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

async function getBlocksWithChildren(blockId: string): Promise<NotionBlock[]> {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  const blocks: NotionBlock[] = [];
  
  for (const block of response.results) {
    if ('type' in block && block.has_children) {
      // Get children for blocks that have them
      const children = await getBlocksWithChildren(block.id);
      // Add children property to the block
       (block as NotionBlockWithChildren).children = children;
    }
    blocks.push(block);
  }
  
  return blocks;
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const pageResponse = await notion.pages.retrieve({
      page_id: id,
    });

    if (!('properties' in pageResponse)) {
      return null;
    }

    const title = getPlainTextFromRichText(pageResponse.properties.title);
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Get full page content with children
    const content = await getBlocksWithChildren(id);

    const excerpt = extractExcerpt(content.slice(0, 3));

    return {
       id,
       title,
       publishedDate: pageResponse.created_time,
       lastEditedTime: pageResponse.last_edited_time,
       excerpt,
       content,
     };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

interface NotionProperty {
  type?: string;
  title?: RichTextItem[];
  [key: string]: unknown;
}

function getPlainTextFromRichText(property: NotionProperty): string {
  if (property?.type === 'title' && property.title) {
    return property.title.map((text: RichTextItem) => text.plain_text).join('');
  }
  return 'Untitled';
}

function extractExcerpt(blocks: NotionBlock[]): string {
  for (const block of blocks) {
    if ('type' in block && block.type === 'paragraph' && 'paragraph' in block && block.paragraph?.rich_text?.length > 0) {
      const text = block.paragraph.rich_text.map((text: RichTextItem) => text.plain_text).join('');
      if (text.trim()) {
        return text.length > 150 ? text.substring(0, 150) + '...' : text;
      }
    }
  }
  return 'No excerpt available';
}

export { notion };