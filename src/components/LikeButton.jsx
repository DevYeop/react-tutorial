import { useAtom } from 'jotai';
import { likeAtom } from '../atoms/likeAtom';

const LikeButton = () => {
  // const [like, setLike] = useAtom(likeAtom);
  // 전역 상태 변경만하고 활용하지 않을꺼면, 아래처럼 생략할 수도 있다.
  const [, setLike] = useAtom(likeAtom);

  return <button onClick={() => setLike((prev) => prev + 1)}>👍 Like</button>;
};

export default LikeButton;
