import React from 'react';
import type { Language } from '../translations/content';
import { translations } from '../translations/content';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang].footer;

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 relative">
      {/* German Flag Top Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 grid grid-cols-3">
        <div className="bg-slate-800"></div>
        <div className="bg-rose-600"></div>
        <div className="bg-amber-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900 text-center ltr:md:text-left rtl:md:text-right">
          
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-center ltr:md:justify-start rtl:md:justify-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 font-extrabold flex items-center justify-center border border-slate-800">
                AG
              </div>
              <span className="text-xl font-extrabold text-white">Herr Adel Ghandy</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              {t.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              {translations[currentLang].nav.about}
            </a>
            <a href="#courses" className="hover:text-amber-400 transition-colors">
              {translations[currentLang].nav.courses}
            </a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">
              {translations[currentLang].nav.testimonials}
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              {translations[currentLang].nav.faq}
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              {translations[currentLang].nav.contact}
            </a>
          </nav>

        </div>

        {/* Bottom Bar with Explicit Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            <span>{t.copyright}</span>
          </div>

          {/* Explicit Mandatory Credit Text */}
          <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 font-bold tracking-wide">
            <span>Created by <strong className="text-amber-400 font-black">Esmael Salah</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
