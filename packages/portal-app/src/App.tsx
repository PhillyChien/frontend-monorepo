import { OwnFundApplication, QuickLoanApplication } from '@frontend-monorepo/ui';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  const { t } = useTranslation();
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
