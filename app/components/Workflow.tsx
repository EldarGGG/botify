export default function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Анализ',
      description: 'Изучаем ваши бизнес-процессы и выявляем точки роста'
    },
    {
      number: '02',
      title: 'Техническое задание',
      description: 'Составляем детальный план внедрения и автоматизации'
    },
    {
      number: '03',
      title: 'Внедрение',
      description: 'Настраиваем системы и обучаем ваших сотрудников'
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверяем работу систем и вносим необходимые корректировки'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16" id="workflow">
      <h2 className="section-title">Как мы работаем</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="card relative overflow-hidden group">
            <div className="absolute -top-6 -left-6 text-8xl font-bold text-white/5 transition-transform group-hover:scale-110">
              {step.number}
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
