import { Button, NumberInput } from '@repo/ui'
import { add } from '@repo/utility'
import { useState } from 'react'

function App() {
  const [nums, setNums] = useState<{
    x: number;
    y: number;
  }>({x: 0, y: 0});

  const [result, setResult] = useState<number>(0);

  return (
    <div className="App">
      <NumberInput value={nums.x} onChange={(e) => setNums({ ...nums, x: parseInt(e.target.value) })} />
      <NumberInput value={nums.y} onChange={(e) => setNums({ ...nums, y: parseInt(e.target.value) })} />
      <Button color='primary' onClick={() => {
        setResult(add(nums.x, nums.y));
      }}>Calculate</Button>
      <span>{result}</span>
    </div>
  )
}

export default App
