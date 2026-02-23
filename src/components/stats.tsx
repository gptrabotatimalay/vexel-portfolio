"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const stats = [
  { value: 50, suffix: "+", label: "Проектов" },
  { value: 2, suffix: " дня", label: "Мин. срок" },
  { value: 40, suffix: "+", label: "Клиентов" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="scroll-fade rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-12">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
