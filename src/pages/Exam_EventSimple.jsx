// ✅ 이미 선언된 함수를 이벤트 핸들러로 전달하는 바인딩 방식
const EventSimple = () => {
  const handleClick = () => {
    alert('클릭 됐습니다~');
  };

  return <button onClick={handleClick}>클릭🖱️</button>;
};

// 선언된 함수없이, 익명(무명, 이름이 없는)함수를 바로 사용할 때
// 익명함수 관련자료 :
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const EventSimple_익명함수 = () => {
  return <button onClick={() => alert('클릭 됐습니다~')}>클릭🖱️</button>;
};

// ❌ 자주 하는 실수: ()를 붙여서 함수를 즉시 실행해버림
const EventSimple_Error = () => {
  const handleClick = () => {
    alert('클릭 됐습니다~');
  };

  return <button onClick={handleClick()}>클릭🖱️</button>;
};

export default EventSimple_Error;
