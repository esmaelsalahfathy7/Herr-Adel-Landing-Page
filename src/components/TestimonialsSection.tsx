import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, ZoomIn, X, Image as ImageIcon } from 'lucide-react';
import type { Language } from '../translations/content';
import { translations } from '../translations/content';

// Import local images directly from assets
import reviewGoethe from '../assets/review_goethe.jpg';
import reviewAusbildung from '../assets/review_ausbildung.jpg';
import reviewJob from '../assets/review_job.jpg';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].testimonials;
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  const imageMap: Record<string, string> = {
    goethe: reviewGoethe,
    ausbildung: reviewAusbildung,
    job: reviewJob,
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-[#0B0F19] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            <ImageIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            {t.subtitle}
          </p>
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
            {t.zoomHint}
          </p>
        </div>

        {/* Screenshot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, idx) => {
            const imgSrc = imageMap[item.id] || item.image;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-50 dark:bg-[#131A29] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Stars & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* Screenshot Image Thumbnail Frame */}
                  <div
                    onClick={() => setSelectedImage({ src: imgSrc, alt: item.achievement, title: item.studentName })}
                    className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 cursor-pointer group/img shadow-md hover:border-amber-400 transition-colors"
                  >
                    <img
                      src={imgSrc}
                      alt={item.achievement}
                      className="w-full h-64 sm:h-72 object-cover object-top transform group-hover/img:scale-105 transition-transform duration-500"
                    />

                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs">
                      <ZoomIn className="w-6 h-6 text-amber-400" />
                      <span>View Full Screenshot</span>
                    </div>
                  </div>

                  {/* Info & Caption */}
                  <div className="space-y-1 pt-2">
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      {item.achievement}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {item.studentName}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed pt-1">
                      {item.caption}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
            >
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
                <div>
                  <h4 className="font-extrabold text-sm text-amber-400">{selectedImage.title}</h4>
                  <p className="text-xs text-slate-400">{selectedImage.alt}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-auto p-2 sm:p-4 flex justify-center bg-slate-950/50">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
