const tasks = [
  { id: 1, title: '리액트 공부', completed: true },
  { id: 2, title: '운동하기', completed: false },
  { id: 3, title: '책 읽기', completed: true },
];

const Exam_RenderingConditionalList = () => {
  return (
    <ul>
      {tasks
        .filter((task) => task.completed) // ✅ 완료된 항목만 표시
        .map((task) => (
          <li key={task.id}>{task.title} ✅</li>
        ))}
    </ul>
  );
};

export default Exam_RenderingConditionalList;
