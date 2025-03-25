import { useAtom } from 'jotai';
import { likeAtom } from '../atoms/likeAtom';

const LikeCount = () => {
  const [like] = useAtom(likeAtom);

  return <p>💖 Likes: {like}</p>;
};

export default LikeCount;
