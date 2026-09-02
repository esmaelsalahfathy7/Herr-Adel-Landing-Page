import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import type { Language } from '../translations/content';
import { translations } from '../translations/content';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].testimonials;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                
                {/* Header: Stars & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-slate-300 absolute -top-2 -left-2 ltr:-left-2 rtl:-right-2 rotate-180 opacity-50" />
                  <p className="text-sm text-slate-700 leading-relaxed font-medium relative z-10 pt-2">
                    "{item.quote}"
                  </p>
                </div>

              </div>

              {/* Student Info */}
              <div className="pt-6 border-t border-slate-200/80 flex items-center gap-3 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
