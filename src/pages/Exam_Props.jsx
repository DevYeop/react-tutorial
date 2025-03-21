const Greeting = ({ name }) => {
  return <h1>안녕하세요, {name}님!</h1>;
};

const App = () => {
  return <Greeting name="철수" />;
};
