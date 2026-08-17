export const locales = ['en', 'mr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  mr: 'मराठी',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  mr: '🇮🇳',
};