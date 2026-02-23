"use client";

import { FileText, Palette, Code2, Rocket } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const steps = [
  {
    icon: FileText,
    title: "Бриф",
    description: "Обсуждаем задачу, цели и сроки. Формируем чёткое ТЗ.",
  },
  {
    icon: Palette,
    title: "Дизайн",
    description: "Создаём макет и согласовываем визуал до начала разработки.",
  },
  {
    icon: Code2,
    title: "Разработка",
    description: "Пишем код, тестируем, показываем промежуточные результаты.",
  },
  {
    icon: Rocket,
    title: "Запуск",
    description: "Деплоим проект, настраиваем аналитику и передаём вам.",
  },
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section id="process" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="scroll-fade text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Как мы работаем
            </span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Простой и прозрачный процесс от идеи до запуска
          </p>
        </div>

        <div className="relative">
          {/* Линия таймлайна (десктоп) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`scroll-fade delay-${(i + 1) * 100} relative text-center`}
              >
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center mb-3 hover:border-violet-500/50 transition-colors">
                    <step.icon size={32} className="text-violet-400" />
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">0{i + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
