import { useState } from 'react';

const ToggleList = () => {
  const [isVisible, setIsVisible] = useState(true);
  const items = ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5'];

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isVisible ? '숨기기' : '보이기'}</button>

      {isVisible && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleList;
