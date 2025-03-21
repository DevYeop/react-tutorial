import { useState, useEffect } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('데이터 요청 시작');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));

    return () => {
      console.log('컴포넌트 언마운트됨 (Cleanup)');
    };
  }, []);

  return (
    <div>
      <h1>사용자 목록</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
