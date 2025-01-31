import { Button, Input } from '@frontend-monorepo/ui';
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
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="shadow-4xl flex w-full max-w-md flex-col gap-4 rounded-md p-4">
        <div className="mb-8 text-2xl font-bold">{t('title')}</div>
        <Input
          type="number"
          placeholder="Enter X"
          value={nums.x}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNums({ ...nums, x: parseInt(e.target.value) })
          }
        />
        <Input
          type="number"
          placeholder="Enter Y"
          value={nums.y}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNums({ ...nums, y: parseInt(e.target.value) })
          }
        />
        <Button
          size="lg"
          variant="default"
          onClick={() => {
            setResult(nums.x + nums.y);
          }}
        >
          Calculate
        </Button>
        <Input disabled type="number" value={result} />
      </div>
    </div>
  );
}

export default App;
