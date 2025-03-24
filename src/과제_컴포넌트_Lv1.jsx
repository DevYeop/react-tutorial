const 이벤트핸들링 = () => {
  const favoriteFood = '🍖 육회';

  const handleClick = () => {
    alert(`제가 가장 좋아하는 음식은 ${favoriteFood}입니다!`);
  };

  return <button onClick={handleClick}>내가 좋아하는 음식은? 🍽️</button>;
};

const 이벤트핸들링_매개변수_전달 = () => {
  const handleClick = (favoriteFood) => {
    alert(`제가 가장 좋아하는 음식은 ${favoriteFood}입니다!`);
  };

  return (
    <button onClick={() => handleClick('🍖 육회')}>
      내가 좋아하는 음식은? 🍽️
    </button>
  );
};

export default 이벤트핸들링;
