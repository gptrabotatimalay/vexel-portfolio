"use client";

import { useState, useRef } from "react";
import { projects, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/lib/useScrollReveal";

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 10);
    setRotateY((centerX - x) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-colors"
    >
      {/* Превью */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center`}>
        <span className="text-4xl font-bold text-white/90">{project.title[0]}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"sites" | "automations">("sites");
  const ref = useScrollReveal();

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="scroll-fade text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Портфолио
            </span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">Проекты, которыми мы гордимся</p>
        </div>

        {/* Табы */}
        <div className="scroll-fade delay-100 flex justify-center gap-2 mb-12">
          {[
            { key: "sites" as const, label: "Сайты" },
            { key: "automations" as const, label: "Автоматизации" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="scroll-fade delay-200 grid md:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
