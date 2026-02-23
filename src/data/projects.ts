export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "sites" | "automations";
  gradient: string;
};

export const projects: Project[] = [
  // Сайты
  {
    id: 1,
    title: "FreshMarket",
    description: "Интернет-магазин фермерских продуктов с каталогом, корзиной и онлайн-оплатой",
    tags: ["Next.js", "Stripe", "Supabase"],
    category: "sites",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    title: "CloudSync",
    description: "Лендинг SaaS-платформы для синхронизации данных между облачными сервисами",
    tags: ["React", "Framer Motion", "Tailwind"],
    category: "sites",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "ArchStudio",
    description: "Сайт архитектурного бюро с 3D-визуализацией проектов и портфолио работ",
    tags: ["Next.js", "Three.js", "Sanity"],
    category: "sites",
    gradient: "from-orange-500 to-amber-500",
  },
  // Автоматизации
  {
    id: 4,
    title: "OrderBot",
    description: "Telegram-бот для автоматической обработки заказов, уведомлений и отчётов",
    tags: ["Python", "Telegram API", "PostgreSQL"],
    category: "automations",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 5,
    title: "SalesPipe",
    description: "Автоматизация CRM-воронки: лиды, напоминания, статусы сделок без ручной работы",
    tags: ["n8n", "HubSpot API", "Webhooks"],
    category: "automations",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "PriceRadar",
    description: "Мониторинг цен конкурентов с ежедневными отчётами в Google Sheets",
    tags: ["Python", "Selenium", "Google Sheets API"],
    category: "automations",
    gradient: "from-indigo-500 to-blue-500",
  },
];
