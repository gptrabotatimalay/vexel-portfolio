"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Наблюдаем сам элемент и все дочерние .scroll-fade
    const targets = el.querySelectorAll(".scroll-fade");
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains("scroll-fade")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
