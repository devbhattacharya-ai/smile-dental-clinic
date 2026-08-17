'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { href: '#home', key: 'home' },
    { href: '#about', key: 'about' },
    { href: '#services', key: 'services' },
    { href: '#gallery', key: 'gallery' },
    { href: '#testimonials', key: 'testimonials' },
    { href: '#contact', key: 'contact' },
  ],
  services: [
    'General Check-up',
    'Teeth Cleaning',
    'Teeth Whitening',
    'Veneers & Crowns',
    'Dental Implants',
    'Root Canal Treatment',
    'Braces & Aligners',
    'Pediatric Dentistry',
  ],
};

const serviceTranslations: Record<string, { en: string; mr: string }> = {
  'General Check-up': { en: 'General Check-up', mr: 'सामान्य तपासणी' },
  'Teeth Cleaning': { en: 'Teeth Cleaning', mr: 'दंत स्वच्छता' },
  'Teeth Whitening': { en: 'Teeth Whitening', mr: 'दंत धुवून काढणे' },
  'Veneers & Crowns': { en: 'Veneers & Crowns', mr: 'व्हिनिअर्स आणि क्राउन्स' },
  'Dental Implants': { en: 'Dental Implants', mr: 'दंत इम्प्लॅंट्स' },
  'Root Canal Treatment': { en: 'Root Canal Treatment', mr: 'रूट कॅनल उपचार' },
  'Braces & Aligners': { en: 'Braces & Aligners', mr: 'ब्रेसेस आणि अलाइनर्स' },
  'Pediatric Dentistry': { en: 'Pediatric Dentistry', mr: 'बाल दंतशल्यचिकित्सा' },
};

export default function Footer() {
  const { t, locale } = useLanguage();

  const getServiceName = (key: string) => serviceTranslations[key]?.[locale] || key;

  return (
    <footer className="bg-neutral-900 text-neutral-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.01%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Clinic Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="#home" className="flex items-center gap-2" aria-label="Smile Dental Clinic Home">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-xl text-white">Smile Dental Clinic</span>
            </Link>

            <p className="text-neutral-400 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-white transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">{t.footer.quickLinks}</h4>
            <nav className="space-y-3" aria-label="Quick links">
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">{t.footer.services}</h4>
            <nav className="space-y-3" aria-label="Services">
              {footerLinks.services.map((service) => (
                <Link
                  key={service}
                  href="#services"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                >
                  {getServiceName(service)}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-white mb-6">{t.footer.contactInfo}</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0 group:bg-primary-500 group:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <address className="not-italic text-sm leading-relaxed">
                  {t.common.location}
                </address>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0 group:bg-primary-500 group:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 98765 43210</span>
              </a>

              <a
                href="mailto:smiledental@kharghar.com"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0 group:bg-primary-500 group:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>smiledental@kharghar.com</span>
              </a>

              <div className="flex items-start gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-sm leading-relaxed">
                  <p>{t.contact.mondayFriday}</p>
                  <p>{t.contact.saturday}</p>
                  <p className="text-neutral-500">{t.contact.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              {t.footer.copyright}
            </p>

            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>Made with care for Kharghar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}