"use client";

import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Создание сайтов",
    description: "Лендинги, интернет-магазины, корпоративные сайты. Современный дизайн, быстрая загрузка, адаптивность.",
    features: ["Лендинги", "Интернет-магазины", "Корпоративные сайты", "От 2 дней"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Автоматизация процессов",
    description: "Telegram-боты, CRM-интеграции, парсинг данных, автоворонки. Экономим ваше время и деньги.",
    features: ["Telegram-боты", "CRM-интеграции", "Парсинг данных", "Автоворонки"],
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
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
              Наши услуги
            </span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Два направления — одна цель: рост вашего бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-300"
            >
              {/* Градиентная подсветка сверху */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.gradient} opacity-50`} />

              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                <service.icon size={28} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-sm rounded-full border border-white/10 text-zinc-300 bg-white/5"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
