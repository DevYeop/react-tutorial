import React, { useState } from 'react';

const Exam_EventOnChange = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>입력한 값: {text}</p>
    </div>
  );
};

export default Exam_EventOnChange;
