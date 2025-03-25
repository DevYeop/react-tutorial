// Counter.js (카운터 UI 및 상태 변경)
import { useAtom } from 'jotai';
import { countAtom } from '../atoms/counterAtom';

export default function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}
