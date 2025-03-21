import { useState } from 'react';

const ConditionalExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <p>환영합니다!</p> : <p>로그인이 필요합니다.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>토글</button>
    </div>
  );
};

export default ConditionalExample;
