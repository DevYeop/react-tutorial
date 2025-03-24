import { useState, useEffect } from 'react';

const Exam_StroageLocal = () => {
  const [value, setValue] = useState('');

  // 🎯 마운트 시 localStorage에서 데이터 불러오기
  useEffect(() => {
    const savedValue = localStorage.getItem('myValue');
    if (savedValue) {
      setValue(savedValue);
    }
  }, []);

  // 🎯 입력값이 변경될 때 localStorage에 저장
  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem('myValue', e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>저장된 값: {value}</p>
    </div>
  );
};

export default Exam_StroageLocal;
