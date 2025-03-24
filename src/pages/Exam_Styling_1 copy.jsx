import styled from 'styled-components'; // styled-components 설치 필요

const ButtonStyles = () => {
  // 1️⃣ JS 객체를 이용한 인라인 스타일링
  const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  return (
    <div>
      {/* 1. 인라인 스타일링 (직접 style 속성 적용) */}
      <button style={{ backgroundColor: 'red', color: 'white' }}>
        인라인 스타일 버튼
      </button>

      {/* 2. JS 객체를 이용한 인라인 스타일링 */}
      <button style={buttonStyle}>JS 객체 스타일 버튼</button>

      {/* 3. Styled-Components를 이용한 스타일링 */}
      <StyledButton>Styled-Components 버튼</StyledButton>
    </div>
  );
};

// 3️⃣ Styled-Components를 이용한 스타일링
// css 문법과 같다
const StyledButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

export default ButtonStyles;
