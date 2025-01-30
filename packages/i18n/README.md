# @frontend-monorepo/i18n

This package provides a simple i18n instance and locales settings for the frontend monorepo.

## To add more words

1. Add the word to the `locales/<language>/translation.json` file.
2. Run `pnpm run -F i18n ts-compile` (`pnpm run locales:compile` in the root directory) to generate the Typescript support for the new locale.

## To add a new locale

1. Add the new locale folder to the `locales` folder.
2. Add a new locale namespace file, named `translation.json`, to the folder we just created (e.g. `locales/fr/translation.json`).
3. Import and add the new resources to the `src/i18n.ts` file.

```ts
import en from '../locales/en/translation.json';

// 👇 Don't forget to import the new locale file 👇
// import fr from '../locales/fr/translation.json';

i18next.init({
  ...
  resources: {
    en: {
      translation: en,
    },
    // 👇 Add the new locale resource like the example below 👇
    // fr: {
    //   translation: fr,
    // },
  },
});
```

4. Run `pnpm run -F i18n ts-compile` (`pnpm run locales:compile` in the root directory) to generate the Typescript support for the new locale.

## To use it in a react application

1. Install the react-i18next package

```bash
pnpm add react-i18next
```

2. Import the i18n instance and declare it using `initReactI18next` in your root component, and wrap your app with the `I18nextProvider` component.

```tsx
import i18next from '@frontend-monorepo/i18n';

import { I18nextProvider, initReactI18next } from 'react-i18next';

import App from './App.tsx';

i18next.use(initReactI18next);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
```

3. Use the `useTranslation` hook to get the translation function in your component.

```tsx
const { t } = useTranslation();

return <div>{t('title')}</div>;
```
