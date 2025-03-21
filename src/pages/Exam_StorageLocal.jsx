import { useState, useEffect } from 'react';

export default function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>저장된 이름: {name}</p>
    </div>
  );
}
