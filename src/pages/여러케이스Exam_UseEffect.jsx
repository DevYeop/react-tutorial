import { useEffect } from 'react';

export default function Example() {
  useEffect(() => {
    console.log('컴포넌트가 처음 화면에 나타났어요!');

    return () => {
      console.log('컴포넌트가 화면에서 사라졌어요!');
    };
  }, []); // 🔹 의존성 배열 `[]` → 처음 마운트될 때만 실행됨

  return <h1>useEffect 예제</h1>;
}


import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`카운트가 변경됨: ${count}`);
  }, [count]); // 🔹 `count`가 바뀔 때마다 실행됨

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1 증가</button>
    </div>
  );
}


import { useEffect, useState } from "react";

export default function FetchDataExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const result = await response.json();
      setData(result);
    }
    
    fetchData();
  }, []); // 🔹 빈 배열 → 컴포넌트가 처음 렌더링될 때만 실행됨

  if (!data) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>데이터 가져오기</h2>
      <p>{data.title}</p>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer); // 💡 언마운트될 때 타이머 정리
      console.log("타이머가 정리됨");
    };
  }, []); // 🔹 처음 마운트될 때 실행

  return <h1>타이머: {time}초</h1>;
}
