// src/App.jsx
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Profile from './pages/Exam_Profile';

const App = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <div>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link> |{' '}
        <Link to="/error">에러</Link> | <Link to="/profile/4">프로필</Link> |{' '}
        <button onClick={() => navigate('/')}>홈으로 이동 🏠</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
