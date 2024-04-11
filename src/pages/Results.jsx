import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateResult } from '../reducer/actions';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const selectedAnswers = useSelector((state) => state.selectedAnswers);
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculateResult(selectedAnswers));
  }, [dispatch, selectedAnswers]);
  // console.log('Result', selectedAnswers);
  if (!result) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  const handleGoHome = () => {
    navigate('/'); // 루트 경로로 리다이렉트
  };
  return (
    <main className='main'>
      <h1>Results</h1>
      <h2>{result.name}</h2>
      <p>{result.desc}</p>
      <div>
        <button onClick={handleGoHome}>테스트 다시하기</button>
        <button>공유하기</button>
      </div>
    </main>
  );
};
export default Results;
