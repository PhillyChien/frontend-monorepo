import Resources from './resources.d.ts';

declare module 'i18next' {
  interface CustomTypeOptions {
    fallbackLng: 'en';
    fallbackNS: 'translation';
    defaultNS: 'translation';
    resources: Resources;
  }
}
