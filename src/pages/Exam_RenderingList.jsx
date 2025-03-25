const Exam_RenderingList = () => {
  const namesArray = ['레오', '보이드', '제프'];
  const namesObj = [
    { id: 1, name: '레오' },
    { id: 2, name: '보이드' },
    { id: 3, name: '제프' },
  ];

  return (
    <>
      <ul>
        {namesArray.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <ul>
        {namesObj.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Exam_RenderingList;
