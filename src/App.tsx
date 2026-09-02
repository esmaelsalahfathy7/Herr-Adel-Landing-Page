import { useState, useEffect } from 'react';
import type { Language } from './translations/content';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QualificationsSection } from './components/QualificationsSection';
import { CourseDetailsSection } from './components/CourseDetailsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default to German Flag Dark Mode

  useEffect(() => {
    // Update DOM HTML dir attribute dynamically
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  useEffect(() => {
    // Toggle dark class on <html> element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-100 selection:text-amber-900 dark:selection:bg-amber-900/50 dark:selection:text-amber-200 transition-colors">
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <main>
        <HeroSection currentLang={currentLang} />
        <QualificationsSection currentLang={currentLang} />
        <CourseDetailsSection currentLang={currentLang} />
        <TestimonialsSection currentLang={currentLang} />
        <FaqSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;
