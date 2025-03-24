import { useState } from 'react';

const Exam_StateOnChange = () => {
  const [text, setText] = useState(''); // 입력값을 저장할 state

  const handleChange = (event) => {
    setText(event.target.value); // 입력값이 변경될 때 state 업데이트
  };

  const handleSubmit = () => {
    alert(`입력한 내용: ${text}`); // 버튼 클릭 시 alert 표시
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="내용을 입력하세요"
      />
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
};

export default Exam_StateOnChange;
