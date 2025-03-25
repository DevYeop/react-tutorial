import { useEffect, useState } from 'react';
import axios from 'axios';

const Exam_DataFetching = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log('데이터 요청 시작 🚀');
      try {
        const res = await axios.get(
          // 해당 줄부터 데이터를 받을 때 까지 기다림
          'https://jsonplaceholder.typicode.com/users'
        );
        console.log('데이터 받음 ✅', res.data);
        setUsers(res.data);
      } catch (error) {
        alert('데이터를 불러오는데 실패했습니다.');
      }
    };

    fetchUsers();
    console.log('fetchUsers 실행 중에도 다른 코드 실행됨 🎈');
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default Exam_DataFetching;
