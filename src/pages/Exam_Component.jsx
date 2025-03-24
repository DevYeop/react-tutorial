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
      <ButtonSimple />
      <ButtonInner />
    </div>
  );
};

export default Exam_Component;
