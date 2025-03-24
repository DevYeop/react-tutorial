import { useState, useEffect } from 'react';

const Exam_Lifecycle = () => {
  const [count, setCount] = useState(0);

  // 🎯 마운트될 때 한 번 실행
  useEffect(() => {
    // 1. Setup 영역
    console.log('컴포넌트가 마운트됨!');

    return () => {
      // 2. Clean up영역.
      // 컴포넌트가 사라질 때 실행된 코드가 여기에 작성된다
      console.log('컴포넌트가 언마운트됨!');
    };
  }, []);

  // 🎯 count가 변경될 때마다 실행
  useEffect(() => {
    console.log(`count 값이 변경됨: ${count}`);
  }, [count]);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1 증가</button>
    </div>
  );
};

export default Exam_Lifecycle;
