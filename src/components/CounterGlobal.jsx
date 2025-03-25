import { useAtom } from 'jotai';
import { counterAtom } from '../atoms/counterAtom'; // 🔹 전역 상태 가져오기

const Counter = () => {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div>
      <h2>전역 카운트: {count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
};

export default Counter;
