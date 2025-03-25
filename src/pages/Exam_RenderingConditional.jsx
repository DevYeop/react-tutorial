import { useState } from 'react';

const Exam_RenderingConditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  // 삼항 연산자 사용
  const ConditionalRendering = ({ isLoggedIn }) => {
    return <h2>{isLoggedIn ? '환영합니다! 😊' : '로그인이 필요합니다. 🔑'}</h2>;
  };

  // && 연산자 사용
  const WelcomeMessage = ({ isAdmin }) => {
    return (
      <div>
        <h2>안녕하세요!</h2>
        {isAdmin && <p>관리자 모드로 접속 중입니다. 🔥</p>}
      </div>
    );
  };

  // if + return 사용
  const UserGreeting = ({ isLoggedIn }) => {
    if (isLoggedIn) {
      return <h2>다시 오셨군요! 😊</h2>;
    } else {
      return <h2>로그인해주세요. 🔐</h2>;
    }
  };

  // null 활용
  const Notification = ({ hasNotification }) => {
    if (!hasNotification) {
      return null;
    }
    return <p>📢 새로운 알림이 있습니다!</p>;
  };

  return (
    <div>
      <h1>조건부 렌더링 예제</h1>

      {/* 1. 삼항 연산자 사용 */}
      <ConditionalRendering isLoggedIn={isLoggedIn} />

      {/* 2. && 연산자 사용 */}
      <WelcomeMessage isAdmin={isAdmin} />

      {/* 3. if + return 사용 */}
      <UserGreeting isLoggedIn={isLoggedIn} />

      {/* 4. null 활용 */}
      <Notification hasNotification={hasNotification} />

      {/* 상태 변경 버튼 */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? '관리자 모드 해제' : '관리자 모드 활성화'}
      </button>
      <button onClick={() => setHasNotification(!hasNotification)}>
        {hasNotification ? '알림 숨기기' : '알림 표시'}
      </button>
    </div>
  );
};

export default Exam_RenderingConditional;
