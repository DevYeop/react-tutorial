import ButtonSimple from '../components/ButtonSimple';

const ButtonInner = () => {
  return (
    <>
      <h1>내부 컴포넌트</h1>
    </>
  );
};

const Exam_Component = () => {
  return (
    <div>
      <h1>컴포넌트 예제</h1>
      {/* Button은 외부컴포넌트다. 현재 파일에서 선언된게 아니기 때문 */}
      {/* 무명함수를 props로 전달 */}
      {/* <Button text="클릭하세요" onClick={() => alert('버튼 클릭됨!')} /> */}
      <ButtonSimple />
      <ButtonInner />
    </div>
  );
};

export default Exam_Component;
