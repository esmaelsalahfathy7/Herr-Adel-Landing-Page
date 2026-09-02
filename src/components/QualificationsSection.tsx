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
      icon: <Award className="w-7 h-7 text-amber-600" />,
      bgIcon: "bg-amber-100/80",
      borderAccent: "border-amber-200",
      title: t.items.exp.title,
      text: t.items.exp.text,
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-rose-600" />,
      bgIcon: "bg-rose-100/80",
      borderAccent: "border-rose-200",
      title: t.items.levels.title,
      text: t.items.levels.text,
    },
    {
      icon: <Sparkles className="w-7 h-7 text-slate-800" />,
      bgIcon: "bg-slate-100",
      borderAccent: "border-slate-300",
      title: t.items.dll.title,
      text: t.items.dll.text,
    },
    {
      icon: <Globe className="w-7 h-7 text-emerald-600" />,
      bgIcon: "bg-emerald-100/80",
      borderAccent: "border-emerald-200",
      title: t.items.daad.title,
      text: t.items.daad.text,
    },
    {
      icon: <Building2 className="w-7 h-7 text-amber-600" />,
      bgIcon: "bg-amber-100/80",
      borderAccent: "border-amber-200",
      title: t.items.ips.title,
      text: t.items.ips.text,
    },
    {
      icon: <Briefcase className="w-7 h-7 text-rose-600" />,
      bgIcon: "bg-rose-100/80",
      borderAccent: "border-rose-200",
      title: t.items.vodafone.title,
      text: t.items.vodafone.text,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
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
              className={`p-6 sm:p-8 rounded-2xl bg-slate-50 border ${card.borderAccent} hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3.5 rounded-xl ${card.bgIcon} transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                  {card.icon}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 leading-snug group-hover:text-rose-600 transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
