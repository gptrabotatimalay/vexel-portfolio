"use client";

import { motion } from "framer-motion";
import { FileText, Palette, Code2, Rocket } from "lucide-react";

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
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Как мы работаем
            </span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Простой и прозрачный процесс от идеи до запуска
          </p>
        </motion.div>

        <div className="relative">
          {/* Линия таймлайна (десктоп) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Номер шага + иконка */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center mb-3 group hover:border-violet-500/50 transition-colors">
                    <step.icon size={32} className="text-violet-400" />
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">0{i + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
