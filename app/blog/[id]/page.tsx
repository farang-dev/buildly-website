import { getBlogPost, BlogPost } from '../../../lib/notion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { BlockObjectResponse, PartialBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type NotionBlock = BlockObjectResponse | PartialBlockObjectResponse;

interface RichTextItem {
  plain_text: string;
  [key: string]: unknown;
}

// Simple content renderer for server component
function SimpleContentRenderer({ content }: { content: NotionBlock[] }) {
  const renderBlock = (block: NotionBlock) => {
    if (!block || !('type' in block) || !block.type) return null;
    
    switch (block.type) {
      case 'paragraph':
        if ('paragraph' in block && block.paragraph?.rich_text) {
          const text = block.paragraph.rich_text.map((item: RichTextItem) => item.plain_text).join('');
          return <p key={block.id} className="mb-4">{text}</p>;
        }
        return null;
      
      case 'heading_1':
        if ('heading_1' in block && block.heading_1?.rich_text) {
          const text = block.heading_1.rich_text.map((item: RichTextItem) => item.plain_text).join('');
          return <h1 key={block.id} className="text-3xl font-bold mb-6">{text}</h1>;
        }
        return null;
      
      case 'heading_2':
        if ('heading_2' in block && block.heading_2?.rich_text) {
          const text = block.heading_2.rich_text.map((item: RichTextItem) => item.plain_text).join('');
          return <h2 key={block.id} className="text-2xl font-semibold mb-4">{text}</h2>;
        }
        return null;
      
      case 'heading_3':
        if ('heading_3' in block && block.heading_3?.rich_text) {
          const text = block.heading_3.rich_text.map((item: RichTextItem) => item.plain_text).join('');
          return <h3 key={block.id} className="text-xl font-medium mb-3">{text}</h3>;
        }
        return null;
      
      case 'bulleted_list_item':
        if ('bulleted_list_item' in block && block.bulleted_list_item?.rich_text) {
          const text = block.bulleted_list_item.rich_text.map((item: RichTextItem) => item.plain_text).join('');
          return <li key={block.id} className="mb-2">{text}</li>;
        }
        return null;
      
      case 'numbered_list_item':
        if ('numbered_list_item' in block && block.numbered_list_item?.rich_text) {
          const text = block.numbered_list_item.rich_text.map((item: RichTextItem) => item.plain_text).join('');
          return <li key={block.id} className="mb-2">{text}</li>;
        }
        return null;
      
      case 'code':
        if ('code' in block && block.code?.rich_text) {
          const text = block.code.rich_text.map((item: RichTextItem) => item.plain_text).join('');
          return (
            <pre key={block.id} className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-sm">{text}</code>
            </pre>
          );
        }
        return null;
      
      case 'divider':
        return <hr key={block.id} className="my-8 border-gray-300" />;
      
      case 'quote':
        if ('quote' in block && block.quote?.rich_text) {
          const text = block.quote.rich_text.map((item: RichTextItem) => item.plain_text).join('');
          return (
            <blockquote key={block.id} className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
              {text}
            </blockquote>
          );
        }
        return null;
      
      default:
        return null; // Hide unsupported block types instead of showing error message
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      {content.map(renderBlock)}
    </div>
  );
}

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-700 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-700 transition-colors">
                  ブログ
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-gray-900 font-medium truncate">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <time>
                  公開日: {new Date(post.publishedDate).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {post.lastEditedTime !== post.publishedDate && (
                  <time>
                    更新日: {new Date(post.lastEditedTime).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                )}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="notion-content-wrapper">
              <SimpleContentRenderer content={post.content} />
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link href="/blog">
              <Button variant="outline" className="group">
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                ブログ一覧に戻る
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}