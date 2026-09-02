import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Briefcase, Award, Check, Sparkles } from 'lucide-react';
import type { Language } from '../translations/content';
import { translations } from '../translations/content';

interface CourseDetailsSectionProps {
  currentLang: Language;
}

export const CourseDetailsSection: React.FC<CourseDetailsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].curriculum;

  const books = [
    {
      key: 'aspekte',
      name: t.books.aspekte.name,
      tag: t.books.aspekte.tag,
      desc: t.books.aspekte.desc,
      colorTag: 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      icon: <BookOpen className="w-8 h-8 text-rose-600 dark:text-rose-400" />,
    },
    {
      key: 'redewendungen',
      name: t.books.redewendungen.name,
      tag: t.books.redewendungen.tag,
      desc: t.books.redewendungen.desc,
      colorTag: 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      icon: <Sparkles className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
    },
    {
      key: 'sicher',
      name: t.books.sicher.name,
      tag: t.books.sicher.tag,
      desc: t.books.sicher.desc,
      colorTag: 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
      icon: <Award className="w-8 h-8 text-slate-800 dark:text-slate-200" />,
    },
  ];

  const goals = [
    {
      icon: <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      title: t.goals.scholarships.title,
      desc: t.goals.scholarships.desc,
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      title: t.goals.university.title,
      desc: t.goals.university.desc,
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: t.goals.ausbildung.title,
      desc: t.goals.ausbildung.desc,
    },
    {
      icon: <Briefcase className="w-6 h-6 text-slate-800 dark:text-slate-200" />,
      title: t.goals.jobs.title,
      desc: t.goals.jobs.desc,
    },
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-50 dark:bg-[#0B0F19] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 font-bold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Textbooks & Books Section */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white ltr:text-left rtl:text-right border-l-4 rtl:border-r-4 rtl:border-l-0 border-rose-600 dark:border-rose-500 ltr:pl-3 rtl:pr-3">
            {t.booksTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {books.map((book, idx) => (
              <motion.div
                key={book.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white dark:bg-[#131A29] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                      {book.icon}
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${book.colorTag}`}>
                      {book.tag}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-xl text-slate-900 dark:text-white pt-2">
                    {book.name}
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {book.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Full Digital Materials Included</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Target Audience Goals */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white ltr:text-left rtl:text-right border-l-4 rtl:border-r-4 rtl:border-l-0 border-amber-500 ltr:pl-3 rtl:pr-3">
            {t.goalsTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#131A29] p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3"
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl w-fit border border-slate-200/60 dark:border-slate-800">
                  {goal.icon}
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {goal.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {goal.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
