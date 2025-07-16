'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';


const portfolioItems = [
  {
    title: "スマイル歯科クリニック",
    description: "地域密着型の歯科医院サイト。最新設備と豊富な経験を持つ医師による安心の治療。",
    category: "歯科医院",
    image: "/dental-clinic.jpg",
    url: "https://dental-clinic-brown-xi.vercel.app/"
  },
  {
    title: "SALON TOKYO",
    description: "東京の中心地にあるプレミアムヘアサロン。最新トレンドと伝統技術の融合。",
    category: "美容院",
    image: "/hair-salon.jpg",
    url: "https://hair-salon-mu.vercel.app/"
  },
  {
    title: "やすらぎ整骨院",
    description: "患者様一人ひとりに寄り添う治療。肩こり・腰痛・スポーツ外傷の専門治療。",
    category: "整骨院",
    image: "/clinic.jpg",
    url: "https://osteopathic-clinic.vercel.app/"
  }
];

const processSteps = [
  {
    step: "01",
    title: "情報提供・ヒアリング",
    description: "お客様のビジネス内容、ターゲット、ご希望のイメージやトーンについて詳しくお聞かせください。"
  },
  {
    step: "02",
    title: "AI駆動でサイト制作",
    description: "いただいた情報を基に、AIが最適なデザインとコンテンツを生成。従来の工程を大幅に短縮します。"
  },
  {
    step: "03",
    title: "調整・完成",
    description: "生成されたサイトを確認いただき、必要に応じて微調整を行い、完成・納品いたします。"
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Buildly</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#service" className="text-gray-600 hover:text-gray-900 transition-colors">サービス</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">制作例</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">料金</a>
              <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors">制作の流れ</a>
              <Link href="/contact">
                <Button variant="outline">お問い合わせ</Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="メニューを開く"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.nav
            initial={false}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4 border-t border-gray-200 mt-4">
              <a 
                href="#service" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                サービス
              </a>
              <a 
                href="#portfolio" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                制作例
              </a>
              <a 
                href="#pricing" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                料金
              </a>
              <a 
                href="#process" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                制作の流れ
              </a>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full mt-2">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">AI駆動のWeb制作サービス</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              スモールビジネスの
              <br />
              <span className="text-blue-600">成長を加速する</span>
              <br />
              Webサイト制作
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              生成AIを活用し、従来の制作工程を大幅に短縮。
              <br className="hidden sm:block" />
              デザイン工程をスキップして、低価格・短納期でプロフェッショナルなサイトを制作します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  無料相談を始める
                </Button>
              </Link>
              <a href="#portfolio">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  制作例を見る
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">なぜBuildlyなのか？</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              従来のWeb制作では時間とコストがかかりすぎる。Buildlyは生成AIの力で、その課題を解決します。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle>圧倒的な速さ</CardTitle>
                  <CardDescription>
                    従来1〜2ヶ月かかる制作を、わずか1週間で完成。デザイン工程をAIが自動化することで実現。
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <CardTitle>低価格を実現</CardTitle>
                  <CardDescription>
                    AIによる自動化で人件費を大幅削減。5万円から始められる価格設定で、スモールビジネスをサポート。
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <CardTitle>プロ品質のデザイン</CardTitle>
                  <CardDescription>
                    AIが業界のベストプラクティスを学習。デザイナー不要でも、プロフェッショナルな仕上がりを保証。
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">制作例</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              様々な業種のスモールビジネス向けに制作したサイトをご覧ください。
              <br />
              各サイトをクリックすると、実際のサイトをご確認いただけます。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-gray-400 group-hover:text-blue-600 transition-colors">→</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                            サイトを見る →
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">料金プラン</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              シンプルで分かりやすい料金体系。追加費用なしで安心してご利用いただけます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="text-center pb-8">
                <Badge className="mx-auto mb-4 bg-blue-600">おすすめ</Badge>
                <CardTitle className="text-2xl mb-2">1ページサイト</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ¥50,000
                  <span className="text-lg font-normal text-gray-600">〜</span>
                </div>
                <CardDescription className="text-base">
                  1週間で制作完了・基本的な調整込み
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    レスポンシブデザイン対応
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    SEO基本設定
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    お問い合わせフォーム
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Google Analytics設定
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    1ヶ月間の無料サポート
                  </li>
                </ul>
                <div className="text-center">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    このプランで始める
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    ※ 複数ページや特別な機能が必要な場合は別途お見積もり
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">制作の流れ</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              シンプルな3ステップで、あなたのビジネスに最適なWebサイトを制作します。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full z-0">
                    <div className="w-8 h-0.5 bg-gray-300 mx-auto"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              あなたのビジネスを
              <br />
              次のレベルへ
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              まずは無料相談から始めませんか？
              <br />
              あなたのビジネスに最適なWebサイトについてお話しましょう。
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  無料相談を予約する
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-semibold">Buildly</span>
              </div>
              <p className="text-gray-400 text-sm">
                生成AIを活用したスモールビジネス向けWeb制作サービス
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#service" className="hover:text-white transition-colors">Web制作</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">制作の流れ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">サイト</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#portfolio" className="hover:text-white transition-colors">制作例</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: mf.nozawa.day@gmail.com</li>
                <li>営業時間: 平日 9:00-18:00</li>
                <li>対応エリア: 全国（オンライン）</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 Buildly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
