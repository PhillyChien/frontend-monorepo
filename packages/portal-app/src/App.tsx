import { Button, NumberInput } from '@frontend-monorepo/ui';
import { useState } from 'react';

function App() {
  const [nums, setNums] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const [result, setResult] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-4 w-full max-w-md shadow-4xl p-4 rounded-md">
        <div className="text-2xl font-bold mb-8">Hello, this is a frontend monorepo!</div>
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
    </div>
  );
}

export default App;
