import { useState } from 'react';

const InputExample = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>입력값: {text}</p>
    </div>
  );
};

export default InputExample;
