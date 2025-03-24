import { useState, useEffect } from 'react';

const Exam_StorageLocal = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    // const savedName = sessionStorage.getItem('name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
    // sessionStorage.setItem('name', e.4target.value);
  };

  const handleNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleName} />
      <p>저장된 이름: {name}</p>
      <input type="text" value={nickname} onChange={handleNickName} />
      <p>저장된 닉네임: {nickname}</p>
    </div>
  );
};

export default Exam_StorageLocal;
