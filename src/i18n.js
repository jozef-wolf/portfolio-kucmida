import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import plTranslations from './locales/pl/translation.json'; // Polish translations

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      pl: {
        translation: plTranslations,
      },
    },
    lng: 'pl', // Default language
    fallbackLng: 'en', // Fallback language if the current language is not available
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;