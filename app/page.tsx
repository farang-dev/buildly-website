'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const portfolioItems = [
  {
    title: "田中歯科クリニック",
    description: "地域密着型の歯科医院サイト。清潔感のあるデザインで信頼性を重視。",
    category: "医院",
    url: "#"
  },
  {
    title: "美容室 SALON TOKYO",
    description: "モダンでスタイリッシュな美容室サイト。施術例やスタッフ紹介を充実。",
    category: "美容院",
    url: "#"
  },
  {
    title: "整骨院 BODY CARE",
    description: "温かみのあるデザインで安心感を演出。施術内容と料金を分かりやすく表示。",
    category: "整骨院",
    url: "#"
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
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Buildly</span>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#service" className="text-gray-600 hover:text-gray-900 transition-colors">サービス</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">制作例</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">料金</a>
              <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors">制作の流れ</a>
              <Link href="/contact">
                <Button variant="outline">お問い合わせ</Button>
              </Link>
            </nav>
          </div>
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              スモールビジネスの
              <br />
              <span className="text-blue-600">成長を加速する</span>
              <br />
              Webサイト制作
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              生成AIを活用し、従来の制作工程を大幅に短縮。
              <br />
              デザイン工程をスキップして、低価格・短納期でプロフェッショナルなサイトを制作します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                無料相談を始める
              </Button>
              <Button variant="outline" size="lg">
                制作例を見る
              </Button>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">なぜBuildlyなのか？</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              従来のWeb制作では時間とコストがかかりすぎる。Buildlyは生成AIの力で、その課題を解決します。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">制作例</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              様々な業種のスモールビジネス向けに制作したサイトをご覧ください。
              <br />
              各サイトをクリックすると、実際のサイトをご確認いただけます。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-sm">サイト画像</span>
                    </div>
                  </CardContent>
                </Card>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">料金プラン</h2>
            <p className="text-xl text-gray-600">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">制作の流れ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              シンプルな3ステップで、あなたのビジネスに最適なWebサイトを制作します。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
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
            <h2 className="text-4xl font-bold text-white mb-6">
              あなたのビジネスを
              <br />
              次のレベルへ
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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
          <div className="grid md:grid-cols-4 gap-8">
            <div>
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
                <li><a href="#" className="hover:text-white transition-colors">Web制作</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO対策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">保守・運用</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@buildly.jp</li>
                <li>Tel: 03-1234-5678</li>
                <li>営業時間: 平日 9:00-18:00</li>
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
