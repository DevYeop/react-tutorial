const Greeting_props = (props) => {
  return <h1>안녕하세요, {props.name}😀!</h1>;
};

// 위 코드를 줄여쓰면 아래와 같다. js문법 중, 구조분해 할당(Destructuring)이라고 한다.
// 관련 자료 :
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring
const Greeting = ({ name }) => {
  return <h1>안녕하세요, {name}입니다~😀</h1>;
};

export default Greeting;
