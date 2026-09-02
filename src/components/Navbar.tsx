import React, { useState } from 'react';
import { MessageCircle, Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import type { Language } from '../translations/content';
import { translations } from '../translations/content';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[currentLang].nav;

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', label: 'العربية', flag: '🇪غت' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs transition-all duration-300">
      {/* Top German Flag Ribbon Accent */}
      <div className="h-1.5 w-full grid grid-cols-3">
        <div className="bg-slate-950"></div>
        <div className="bg-rose-600"></div>
        <div className="bg-amber-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group focus:outline-hidden">
            <div className="w-11 h-11 rounded-xl bg-slate-900 dark:bg-slate-800 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300 border border-slate-800 dark:border-slate-700">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-rose-600 transition-colors">
                {t.brandName}
              </span>
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wide">
                {t.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700 dark:text-slate-200">
            <a href="#about" className="hover:text-rose-600 dark:hover:text-amber-400 transition-colors py-2">
              {t.about}
            </a>
            <a href="#courses" className="hover:text-rose-600 dark:hover:text-amber-400 transition-colors py-2">
              {t.courses}
            </a>
            <a href="#testimonials" className="hover:text-rose-600 dark:hover:text-amber-400 transition-colors py-2">
              {t.testimonials}
            </a>
            <a href="#faq" className="hover:text-rose-600 dark:hover:text-amber-400 transition-colors py-2">
              {t.faq}
            </a>
            <a href="#contact" className="hover:text-rose-600 dark:hover:text-amber-400 transition-colors py-2">
              {t.contact}
            </a>
          </nav>

          {/* Right Actions: Dark Mode Toggle, Language Switcher & WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Dark Mode Switcher */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
              aria-label="Toggle Dark Mode"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Language Switcher Pill/Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs transition-all border border-slate-200 dark:border-slate-700 cursor-pointer"
                aria-label="Select Language"
              >
                <Globe className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span className="uppercase font-bold">{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-500 dark:text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 ltr:right-0 rtl:left-0 mt-2 w-36 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                        currentLang === lang.code ? 'text-rose-600 dark:text-amber-400 bg-rose-50/50 dark:bg-slate-800/80' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                      {currentLang === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-amber-400"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/4915231428204"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{t.whatsappCta}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Mobile Dark Mode Button */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Lang Pills */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                    currentLang === lang.code
                      ? 'bg-slate-900 text-amber-400 dark:bg-slate-700 dark:text-amber-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col gap-3 font-semibold text-slate-800 dark:text-slate-100 text-base">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t.about}
            </a>
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t.courses}
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t.testimonials}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t.faq}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t.contact}
            </a>
          </nav>
          
          <div className="pt-2">
            <a
              href="https://wa.me/4915231428204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-base shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>{t.whatsappCta}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
