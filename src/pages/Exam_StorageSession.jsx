import { useState, useEffect } from 'react';

export default function SessionStorageExample() {
  const [input, setInput] = useState('');

  // 🔹 페이지 로드 시 sessionStorage에서 값 가져오기
  useEffect(() => {
    const savedValue = sessionStorage.getItem('userInput');
    if (savedValue) setInput(savedValue);
  }, []);

  // 🔹 입력값이 바뀔 때마다 sessionStorage에 저장
  const handleChange = (e) => {
    setInput(e.target.value);
    sessionStorage.setItem('userInput', e.target.value);
  };

  return (
    <div>
      <h2>SessionStorage Example</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="입력하면 sessionStorage에 저장됨"
      />
      <p>저장된 값: {input}</p>
    </div>
  );
}
