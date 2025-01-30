import i18next from 'i18next';
import en from '../locales/en/translation.json';

i18next.init({
  debug: true,
  supportedLngs: ['en'],
  fallbackLng: 'en',
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18next;
