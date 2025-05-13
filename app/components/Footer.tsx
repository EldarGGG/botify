import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-lg mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Botify</h3>
            <p className="text-white/70">
              Автоматизация бизнес-процессов с помощью современных технологий
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Внедрение CRM
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  ИИ-боты
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Интеграции
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#cases" className="text-white/70 hover:text-white transition-colors">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70">
              <li>Email: info@botify.kz</li>
              <li>Тел: +7 (777) 777-77-77</li>
              <li>Адрес: г. Алматы, ул. Примерная 123</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Botify. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
