"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Создаём сайты за 2 дня",
  "Автоматизируем бизнес-процессы",
  "Делаем Telegram-ботов",
  "Интегрируем CRM-системы",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient фон */}
      <div className="absolute inset-0 animate-mesh-gradient bg-gradient-to-br from-violet-950/50 via-black to-blue-950/50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
            VEXEL
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
          Делаем сайты и автоматизации, которые приносят результат
        </p>

        {/* Typing эффект */}
        <div className="h-8 mb-10">
          <span className="text-lg text-violet-300 font-mono">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <a
          href="#services"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium text-lg glow-button transition-transform hover:scale-105"
        >
          Смотреть услуги
        </a>
      </div>
    </section>
  );
}
