import Resources from './resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    fallbackLng: 'en';
    fallbackNS: 'translation';
    defaultNS: 'translation';
    resources: Resources;
  }
}
