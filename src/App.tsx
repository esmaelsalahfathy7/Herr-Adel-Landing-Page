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

  useEffect(() => {
    // Update DOM HTML dir attribute dynamically
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />
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
