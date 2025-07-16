'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // フォームデータをメール形式で整形
    const emailBody = `
新しいお問い合わせがありました。

【お客様情報】
お名前: ${formData.name}
メールアドレス: ${formData.email}
会社名: ${formData.company}
電話番号: ${formData.phone}

【プロジェクト情報】
プロジェクトタイプ: ${formData.projectType}
ご予算: ${formData.budget}

【お問い合わせ内容】
${formData.message}

---
Buildly お問い合わせフォームより
    `;

    // mailto リンクを作成
    const mailtoLink = `mailto:mf.nozawa.day@gmail.com?subject=Buildly お問い合わせ - ${formData.name}様&body=${encodeURIComponent(emailBody)}`;
    
    // メールクライアントを開く
    window.location.href = mailtoLink;
    
    // 少し待ってから完了状態にする
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Buildly</span>
              </Link>
              
              {/* Mobile-friendly back button */}
              <Link href="/">
                <Button variant="outline" size="sm" className="text-sm">
                  ← ホームに戻る
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                お問い合わせありがとうございます
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                メールクライアントが開きました。
                <br />
                送信ボタンを押してお問い合わせを完了してください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    ホームに戻る
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      projectType: '',
                      budget: '',
                      message: ''
                    });
                  }}
                >
                  新しいお問い合わせ
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Buildly</span>
            </Link>
            
            {/* Mobile-friendly back button */}
            <Link href="/">
              <Button variant="outline" size="sm" className="text-sm">
                ← ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">お問い合わせ</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              無料相談・お見積もり
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              あなたのビジネスに最適なWebサイトについて、
              <br />
              まずはお気軽にご相談ください。
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">お問い合わせ情報</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">メールアドレス</h3>
                  <p className="text-gray-600">mf.nozawa.day@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">営業時間</h3>
                  <p className="text-gray-600">平日 9:00-18:00</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">対応エリア</h3>
                  <p className="text-gray-600">全国対応（オンライン）</p>
                </div>
              </div>

              <Card className="mt-8 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">制作の流れ</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm text-blue-800">
                    <li>1. お問い合わせ・ヒアリング</li>
                    <li>2. お見積もり・ご提案</li>
                    <li>3. AI駆動でサイト制作</li>
                    <li>4. 調整・完成・納品</li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>お問い合わせフォーム</CardTitle>
                  <CardDescription>
                    以下のフォームにご記入いただき、送信してください。24時間以内にご返信いたします。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">お名前 *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">メールアドレス *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">会社名・屋号</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">電話番号</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectType">プロジェクトタイプ</Label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">選択してください</option>
                          <option value="新規制作">新規制作</option>
                          <option value="リニューアル">リニューアル</option>
                          <option value="保守・運用">保守・運用</option>
                          <option value="その他">その他</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget">ご予算</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">選択してください</option>
                          <option value="5万円〜10万円">5万円〜10万円</option>
                          <option value="10万円〜20万円">10万円〜20万円</option>
                          <option value="20万円〜50万円">20万円〜50万円</option>
                          <option value="50万円以上">50万円以上</option>
                          <option value="要相談">要相談</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">お問い合わせ内容 *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="プロジェクトの詳細、ご希望、ご質問などをお聞かせください。"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}