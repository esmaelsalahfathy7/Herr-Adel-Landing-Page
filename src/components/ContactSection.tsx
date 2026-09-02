import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';
import type { Language } from '../translations/content';
import { translations } from '../translations/content';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].contact;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'study',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', goal: 'study', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 font-bold text-xs uppercase tracking-wider">
            <Mail className="w-4 h-4 text-rose-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-8 relative overflow-hidden">
              {/* German Flag Accent Corner */}
              <div className="absolute top-0 right-0 ltr:right-0 rtl:left-0 w-32 h-1.5 grid grid-cols-3">
                <div className="bg-slate-950"></div>
                <div className="bg-rose-600"></div>
                <div className="bg-amber-400"></div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white">Direct Communication</h3>
                <p className="text-sm text-slate-400">Connect with Herr Adel Ghandy directly for instant course availability.</p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-6">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/4915231428204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group"
                >
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block">{t.direct.whatsappTitle}</span>
                    <span className="text-base font-extrabold text-white dir-ltr inline-block">{t.direct.whatsappValue}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:Adel@example.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group"
                >
                  <div className="p-3 bg-rose-500/20 text-rose-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block">{t.direct.emailTitle}</span>
                    <span className="text-base font-extrabold text-white">{t.direct.emailValue}</span>
                  </div>
                </a>

                {/* Format / Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block">{t.direct.locationTitle}</span>
                    <span className="text-xs font-bold text-slate-200">{t.direct.locationValue}</span>
                  </div>
                </div>

              </div>

              {/* Social Media Channels */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Follow & Connect</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3 text-sm font-semibold"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.form.successMsg}</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    {t.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    {t.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    {t.form.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.form.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-all"
                  />
                </div>

                {/* Target Goal */}
                <div className="space-y-2">
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    {t.form.goalLabel}
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-all cursor-pointer"
                  >
                    <option value="study">{t.form.goalOptions.study}</option>
                    <option value="job">{t.form.goalOptions.job}</option>
                    <option value="ausbildung">{t.form.goalOptions.ausbildung}</option>
                    <option value="scholarship">{t.form.goalOptions.scholarship}</option>
                    <option value="other">{t.form.goalOptions.other}</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  {t.form.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-base shadow-md transition-all duration-300 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>{t.form.submitBtn}</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
