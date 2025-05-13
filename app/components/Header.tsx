'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-emerald-900/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:text-white/90 transition-colors"
          >
            Botify
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#benefits" className="nav-link">
              Преимущества
            </Link>
            <Link href="#workflow" className="nav-link">
              Как мы работаем
            </Link>
            <Link href="#testimonials" className="nav-link">
              Отзывы
            </Link>
            <Link href="#contact" className="nav-link">
              Контакты
            </Link>
            <button className="btn-primary">
              Связаться
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            <Link 
              href="#benefits" 
              className="block nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Преимущества
            </Link>
            <Link 
              href="#workflow" 
              className="block nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Как мы работаем
            </Link>
            <Link 
              href="#testimonials" 
              className="block nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Отзывы
            </Link>
            <Link 
              href="#contact" 
              className="block nav-link" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </Link>
            <button className="btn-primary w-full">
              Связаться
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
