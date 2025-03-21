const users = ['제프', '보이드', '레오'];

const UserList = () => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
};

export default UserList;
