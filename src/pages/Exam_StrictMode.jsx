import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('useEffect 실행됨!');

    return () => {
      console.log('Cleanup 실행됨!');
    };
  }, []);

  return <h1>Strict Mode 테스트</h1>;
}
