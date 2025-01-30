import '@frontend-monorepo/tailwind';

import { i18next } from '@frontend-monorepo/i18n';
import LanguageDetector from 'i18next-browser-languagedetector';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import App from './App.tsx';

i18next.use(LanguageDetector).use(initReactI18next);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
