import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          お探しの記事は削除されたか、URLが間違っている可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog">
            <Button variant="outline" className="w-full sm:w-auto">
              ブログ一覧に戻る
            </Button>
          </Link>
          <Link href="/">
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              ホームに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}