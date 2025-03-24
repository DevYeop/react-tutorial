import { useState } from 'react';

const Exam_State = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가➕</button>
      <button onClick={() => setCount(count - 1)}>감소➖</button>
      <button onClick={() => setCount(0)}>초기화 🔄</button>
    </div>
  );
};

export default Exam_State;
