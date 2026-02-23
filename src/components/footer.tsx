"use client";

import { Send, Mail, Github } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const contacts = [
  { icon: Send, label: "Telegram", href: "https://t.me/vexel_studio" },
  { icon: Mail, label: "hello@vexel.studio", href: "mailto:hello@vexel.studio" },
  { icon: Github, label: "GitHub", href: "https://github.com/vexel-studio" },
];

export default function Footer() {
  const ref = useScrollReveal();

  return (
    <footer id="footer" className="py-16 px-6 border-t border-white/5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="scroll-fade text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Давайте работать вместе
          </h2>
          <p className="text-zinc-400 mb-8">Напишите нам — обсудим ваш проект</p>

          <div className="flex justify-center gap-6 mb-12">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-white/20 transition-all text-sm"
              >
                <contact.icon size={18} />
                <span className="hidden sm:inline">{contact.label}</span>
              </a>
            ))}
          </div>

          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} VEXEL. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
