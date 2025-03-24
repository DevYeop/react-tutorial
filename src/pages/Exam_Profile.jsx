import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams(); // URL에서 id 값을 가져옴

  return <h1>사용자 프로필 페이지 - ID: {id}</h1>;
};

export default Profile;
