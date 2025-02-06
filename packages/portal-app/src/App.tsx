import { BackendClient } from '@frontend-monorepo/backend-client';
import { OwnFundApplication, QuickLoanApplication } from '@frontend-monorepo/ui';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router';

const backendClient = new BackendClient({
  apiClientOptions: {
    baseUrl: 'http://localhost:3000',

    refreshTokenThresholdMs: 1000,
    refreshTokenCallback: () => Promise.resolve(''),
  },
});

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    backendClient.user.getMe().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <BrowserRouter>
      <h1>{t('title')}</h1>
      <Routes>
        <Route path="application/*" element={<QuickLoanApplication />} />
        <Route path="own-fund/*" element={<OwnFundApplication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
