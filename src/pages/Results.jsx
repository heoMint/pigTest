import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateResult } from '../reducer/actions';

const Results = () => {
  const selectedAnswers = useSelector((state) => state.selectedAnswers);
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateResult(selectedAnswers));
  }, [dispatch, selectedAnswers]);
  // console.log('Result', selectedAnswers);
  if (!result) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  return (
    <main className='main'>
      <h1>Results</h1>
      <h2>{result.name}</h2>
      <p>{result.desc}</p>
      <div>
        <a href='/'>
          <button>테스트 다시하기</button>
        </a>

        <button>공유하기</button>
      </div>
    </main>
  );
};
export default Results;
