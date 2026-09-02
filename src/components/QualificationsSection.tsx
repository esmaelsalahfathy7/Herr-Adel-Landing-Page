import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Globe, Sparkles, Building2, CheckCircle } from 'lucide-react';
import type { Language } from '../translations/content';
import { translations } from '../translations/content';

interface QualificationsSectionProps {
  currentLang: Language;
}

export const QualificationsSection: React.FC<QualificationsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].qualifications;

  const cards = [
    {
      icon: <Award className="w-7 h-7 text-amber-600 dark:text-amber-400" />,
      bgIcon: "bg-amber-100/80 dark:bg-amber-950/60",
      borderAccent: "border-amber-200 dark:border-amber-900/60",
      title: t.items.exp.title,
      text: t.items.exp.text,
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-rose-600 dark:text-rose-400" />,
      bgIcon: "bg-rose-100/80 dark:bg-rose-950/60",
      borderAccent: "border-rose-200 dark:border-rose-900/60",
      title: t.items.levels.title,
      text: t.items.levels.text,
    },
    {
      icon: <Sparkles className="w-7 h-7 text-slate-800 dark:text-slate-200" />,
      bgIcon: "bg-slate-100 dark:bg-slate-800",
      borderAccent: "border-slate-300 dark:border-slate-700",
      title: t.items.dll.title,
      text: t.items.dll.text,
    },
    {
      icon: <Globe className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
      bgIcon: "bg-emerald-100/80 dark:bg-emerald-950/60",
      borderAccent: "border-emerald-200 dark:border-emerald-900/60",
      title: t.items.daad.title,
      text: t.items.daad.text,
    },
    {
      icon: <Building2 className="w-7 h-7 text-amber-600 dark:text-amber-400" />,
      bgIcon: "bg-amber-100/80 dark:bg-amber-950/60",
      borderAccent: "border-amber-200 dark:border-amber-900/60",
      title: t.items.ips.title,
      text: t.items.ips.text,
    },
    {
      icon: <Briefcase className="w-7 h-7 text-rose-600 dark:text-rose-400" />,
      bgIcon: "bg-rose-100/80 dark:bg-rose-950/60",
      borderAccent: "border-rose-200 dark:border-rose-900/60",
      title: t.items.vodafone.title,
      text: t.items.vodafone.text,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-[#0B0F19] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider">
            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#131A29] border ${card.borderAccent} hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3.5 rounded-xl ${card.bgIcon} transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                  {card.icon}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-snug group-hover:text-rose-600 dark:group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
