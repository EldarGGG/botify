import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Александр Петров',
      position: 'CEO, TechCorp',
      text: 'Благодаря Botify мы автоматизировали работу с клиентами и увеличили продажи на 45% за первые 3 месяца.',
      image: '/testimonials/person1.jpg'
    },
    {
      name: 'Елена Смирнова',
      position: 'Руководитель отдела продаж, RetailPlus',
      text: 'Внедрение CRM-системы прошло быстро и безболезненно. Поддержка на высшем уровне.',
      image: '/testimonials/person2.jpg'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Директор по развитию, ServiceMax',
      text: 'ИИ-боты помогли нам автоматизировать 70% рутинных задач. Очень довольны результатом.',
      image: '/testimonials/person3.jpg'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16" id="testimonials">
      <h2 className="section-title">Отзывы наших клиентов</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-white/70">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-white/90">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
