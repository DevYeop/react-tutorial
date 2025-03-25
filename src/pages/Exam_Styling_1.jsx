import '@/Exam.css'; // 1️⃣ 별도 CSS 파일

const Exam_Styling_1 = () => {
  return (
    <div>
      {/* 3️⃣ HTML 인라인 스타일 */}
      <h1 style={{ color: 'red' }}>인라인 스타일 (HTML 방식)</h1>

      {/* 2️⃣ JS 객체 스타일 */}
      <h1 style={style}>JS 객체 스타일</h1>

      {/* 1️⃣ 외부 CSS 파일 스타일 */}
      <h1 className="styled-text">CSS 파일 스타일</h1>
    </div>
  );
};

const style = { color: 'blue', fontSize: '20px' }; // 2️⃣ JS 객체 방식

export default Exam_Styling_1;
