import LikeButton from './components/LikeButton';
import LikeCount from './components/LikeCount';

const App = () => {
  return (
    <div>
      <h2>Jotai 좋아요 카운트</h2>
      <LikeCount />
      <LikeButton />
    </div>
  );
};

export default App;
