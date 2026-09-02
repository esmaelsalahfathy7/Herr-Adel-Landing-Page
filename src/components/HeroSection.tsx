import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Sparkles, CheckCircle2, Award, GraduationCap } from 'lucide-react';
import type { Language } from '../translations/content';
import { translations } from '../translations/content';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].hero;

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19] py-12 md:py-20 lg:py-24 border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute -top-32 left-10 w-96 h-96 bg-amber-200/30 dark:bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-rose-200/30 dark:bg-rose-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center ltr:lg:text-left rtl:lg:text-right">
            
            {/* Discount Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-300/80 dark:border-amber-700/80 text-amber-900 dark:text-amber-300 font-bold text-xs sm:text-sm shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-pulse" />
              <span>{t.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight sm:leading-tight"
            >
              {t.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto ltr:lg:mx-0 rtl:lg:mx-0"
            >
              {t.subheadline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center ltr:lg:justify-start rtl:lg:justify-start gap-4 pt-2"
            >
              <a
                href="https://wa.me/4915231428204"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>{t.primaryCta}</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Adel@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-base border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                <span>{t.secondaryCta}</span>
              </a>
            </motion.div>

            {/* Key Trust Signals Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex flex-col items-center ltr:lg:items-start rtl:lg:items-start">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">{t.metrics.expValue}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.metrics.expLabel}</span>
              </div>
              <div className="flex flex-col items-center ltr:lg:items-start rtl:lg:items-start">
                <span className="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400">{t.metrics.certValue}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.metrics.certLabel}</span>
              </div>
              <div className="flex flex-col items-center ltr:lg:items-start rtl:lg:items-start">
                <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">{t.metrics.scholarshipValue}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.metrics.scholarshipLabel}</span>
              </div>
              <div className="flex flex-col items-center ltr:lg:items-start rtl:lg:items-start">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">{t.metrics.studentsValue}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.metrics.studentsLabel}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Visual / Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Card Graphic with German Flag Ribbon Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white dark:bg-[#131A29] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 overflow-hidden">
              
              {/* Subtle German Flag Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-2 grid grid-cols-3">
                <div className="bg-slate-900"></div>
                <div className="bg-rose-600"></div>
                <div className="bg-amber-400"></div>
              </div>

              {/* Instructor Header Badge */}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-amber-400 flex items-center justify-center font-black text-2xl shadow-md border border-slate-700">
                  AG
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">Herr Adel Ghandy</h3>
                  <p className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">C1 / C2 German Instructor</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">DAAD & IPS Bundestag Fellow</p>
                </div>
              </div>

              {/* Highlight Chips */}
              <div className="space-y-3 bg-slate-50 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white">Zoom Live Interactive Classes</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Small groups, live conversational drills, homework correction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white">DLL & Goethe Methodology</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Deutsches Sprachdiplom certified teaching techniques.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white">DAAD & IPS Scholarship Coaching</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">German Parliament (البرلمان الألماني) & Academic Grants guidance.</p>
                  </div>
                </div>
              </div>

              {/* Discount Callout Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50 to-amber-50 dark:from-rose-950/40 dark:to-amber-950/40 border border-rose-200 dark:border-rose-900/60 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-rose-700 dark:text-rose-300 block uppercase">Special Enrollment Offer</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white">10% Off B2 Intensive Batch</span>
                </div>
                <span className="px-3 py-1 bg-rose-600 text-white font-extrabold text-xs rounded-full shadow-xs">
                  10% OFF
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
