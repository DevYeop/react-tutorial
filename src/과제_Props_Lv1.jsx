const InnerComponent = ({ name, food }) => {
  return (
    <h1>
      안녕하세요, {name}님! 당신이 좋아하는 음식은 {food}군요! 🍽️
    </h1>
  );
};

const FavoriteFood = () => {
  return (
    <>
      <InnerComponent name="레오" food="🍕 피자" />
      <InnerComponent name="보이드" food="🍣 스시" />
      <InnerComponent name="제프" food="🍔 햄버거" />
    </>
  );
};

export default FavoriteFood;
