'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, locales, defaultLocale, localeNames, localeFlags } from '@/lib/i18n';

type TranslationKeys = typeof import('@/lib/translations/en').translations;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
  localeNames: Record<Locale, string>;
  localeFlags: Record<Locale, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [t, setTranslations] = useState<TranslationKeys>(
    () => require(`@/lib/translations/${defaultLocale}`).translations
  );

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    import(`@/lib/translations/${locale}`).then((module) => {
      setTranslations(module.translations);
    });
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, localeNames, localeFlags }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}