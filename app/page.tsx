'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';
import ContactForm from './components/ContactForm';

// Функция для анимации при скролле
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
}

export default function Home() {
  useEffect(() => {
    handleScrollAnimation();
  }, []);
  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-center relative">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Автоматизация бизнеса <br />
          с помощью CRM и ИИ-решений
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto animate-slide-up">
          Внедряем CRM-системы, WhatsApp Business API и ИИ-ботов 
          для повышения эффективности вашего бизнеса
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-slide-up" style={{ animationDelay: '200ms' }}>
          <button className="btn-primary">Получить консультацию</button>
          <button className="btn-outline">Посмотреть демо</button>
        </div>
      </section>

      {/* Clients Logo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="text-center text-xl mb-8">Нам доверяют</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {/* Здесь будут логотипы клиентов */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16" id="benefits">
        <h2 className="section-title">Преимущества работы с нами</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Опыт</h3>
            <p>Более 5 лет опыта в автоматизации бизнес-процессов</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Стандарты</h3>
            <p>Работаем по международным стандартам качества</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Результат</h3>
            <p>Гарантируем измеримый результат внедрения</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-title">Сравнение внедрения</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-red-400">Без нас</h3>
            <ul className="space-y-3 text-white/80">
              <li>✗ Длительное внедрение без четких сроков</li>
              <li>✗ Отсутствие технической поддержки</li>
              <li>✗ Риск потери данных при миграции</li>
              <li>✗ Сложности в обучении персонала</li>
              <li>✗ Нет гарантии результата</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-green-400">С нами</h3>
            <ul className="space-y-3 text-white/80">
              <li>✓ Быстрое внедрение по четкому плану</li>
              <li>✓ 24/7 техническая поддержка</li>
              <li>✓ Безопасная миграция данных</li>
              <li>✓ Полное обучение персонала</li>
              <li>✓ Гарантия результата</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <Workflow />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
