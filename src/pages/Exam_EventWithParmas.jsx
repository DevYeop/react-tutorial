// ✅ 이미 선언된 함수를, 화살표 함쉬를 통해 바인딩 방식
const EventWithParams = () => {
  const name = '레오';
  const handleClick = () => {
    // 백틱을 이용해(키보드 1번 왼쪽에 있는 따옴표 같이 생긴것),
    // JS 문법 중 템플릿 리터럴(Template literals)을 쓰면 편하다.
    //
    // 관련 자료:
    // https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Scripting/Strings
    console.log('안녕하세요, ' + name + '입니다~');
    console.log(`안녕하세요, ${name}입니다~`);
  };
  return <button onClick={() => handleClick(name)}>🖱️클릭!</button>;
};

// ❌ 자주 하는 실수: ()를 붙여서 함수를 즉시 실행해버림
// 아무리 클릭해도 반응이 없다.
const EventWithParams_Error = () => {
  const name = '레오';
  const handleClick = () => {
    console.log('안녕하세요, ' + name + '입니다~');
    console.log(`안녕하세요, ${name}입니다~`);
  };

  return <button onClick={handleClick(name)}>🖱️클릭!</button>;
};

export default EventWithParams;
