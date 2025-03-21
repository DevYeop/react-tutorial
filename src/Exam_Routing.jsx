import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return <h1>홈 페이지</h1>;
};

const About = () => {
  return <h1>소개 페이지</h1>;
};

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
