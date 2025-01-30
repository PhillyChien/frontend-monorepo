import { Button, NumberInput } from '@frontend-monorepo/ui';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const [nums, setNums] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const [result, setResult] = useState<number>(0);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n, i18n.language]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-4 w-full max-w-md shadow-4xl p-4 rounded-md">
        <div className="text-2xl font-bold mb-8">{t('title')}</div>
        <NumberInput
          label="X"
          value={nums.x}
          onChange={(e) => setNums({ ...nums, x: parseInt(e.target.value) })}
        />
        <NumberInput
          label="Y"
          value={nums.y}
          onChange={(e) => setNums({ ...nums, y: parseInt(e.target.value) })}
        />
        <Button
          color="primary"
          onClick={() => {
            setResult(nums.x + nums.y);
          }}
        >
          Calculate
        </Button>

        <NumberInput label="Result" value={result} disabled />
      </div>

      <button onClick={() => i18n.changeLanguage('fr')}>切換到法文</button>
      <button onClick={() => i18n.changeLanguage('en')}>切換到英文</button>
    </div>
  );
}

export default App;
