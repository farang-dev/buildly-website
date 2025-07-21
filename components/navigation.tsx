'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    if (pathname === '/') {
      scrollToTop();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <>
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={goToHome}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Buildly</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`transition-colors ${
                  isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                ホーム
              </Link>
              <button 
                onClick={() => scrollToSection('service')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                サービス
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                制作例
              </button>
              <Link 
                href="/blog" 
                className={`transition-colors ${
                  isActive('/blog') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                ブログ
              </Link>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                料金
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                制作の流れ
              </button>
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
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
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
              <Link 
                href="/" 
                className={`block py-2 transition-colors ${
                  isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ホーム
              </Link>
              <button 
                onClick={() => scrollToSection('service')}
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 w-full text-left"
              >
                サービス
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 w-full text-left"
              >
                制作例
              </button>
              <Link 
                href="/blog" 
                className={`block py-2 transition-colors ${
                  isActive('/blog') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ブログ
              </Link>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 w-full text-left"
              >
                料金
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 w-full text-left"
              >
                制作の流れ
              </button>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full mt-2">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 flex items-center justify-center"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="ページトップに戻る"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  );
}