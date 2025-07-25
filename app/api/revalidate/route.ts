import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    // Check for secret to confirm this is a valid request
    const body = await request.json();
    const secret = body.secret || request.nextUrl.searchParams.get('secret');
    
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Revalidate the blog pages
    revalidatePath('/blog');
    revalidatePath('/blog/[id]', 'page');
    
    console.log('Blog pages revalidated successfully');
    
    return NextResponse.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString(),
      paths: ['/blog', '/blog/[id]']
    });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}

// Also support GET requests for manual testing
export async function GET(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret');
    
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Revalidate the blog pages
    revalidatePath('/blog');
    revalidatePath('/blog/[id]', 'page');
    
    console.log('Blog pages revalidated successfully via GET');
    
    return NextResponse.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString(),
      paths: ['/blog', '/blog/[id]'],
      method: 'GET'
    });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}