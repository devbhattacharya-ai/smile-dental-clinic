'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';

const navItems = [
  { href: '#home', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#services', key: 'services' },
  { href: '#gallery', key: 'gallery' },
  { href: '#testimonials', key: 'testimonials' },
  { href: '#contact', key: 'contact' },
];

export default function Header() {
  const { locale, setLocale, t, localeNames, localeFlags } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2" aria-label="Smile Dental Clinic Home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-xl text-neutral-900 hidden sm:block">
              Smile Dental Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all hover:after:w-full"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onClick={() => setLocale(locale === 'en' ? 'mr' : 'en')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors text-sm font-medium text-neutral-700"
                aria-label={`Switch to ${localeNames[locale === 'en' ? 'mr' : 'en']}`}
              >
                <span>{localeFlags[locale]}</span>
                <span>{localeNames[locale]}</span>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent-500 text-white rounded-full font-medium hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">{t.common.whatsapp}</span>
              </a>
              <Link
                href="#appointment"
                className="px-5 py-2.5 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                {t.nav.bookAppointment}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLocale(locale === 'en' ? 'mr' : 'en')}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 text-sm"
                aria-label={`Switch to ${localeNames[locale === 'en' ? 'mr' : 'en']}`}
              >
                <span>{localeFlags[locale]}</span>
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-neutral-100 animate-slide-in-right">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="px-2 py-2 text-neutral-600 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent-500 text-white rounded-full font-medium"
                >
                  <MessageSquare className="w-5 h-5" />
                  {t.common.whatsapp}
                </a>
                <Link
                  href="#appointment"
                  className="flex-1 text-center px-4 py-3 bg-primary-600 text-white rounded-full font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.bookAppointment}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}