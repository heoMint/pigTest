import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateResult } from '../reducer/actions';
import styled from 'styled-components';

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
          <S.Button>테스트 다시하기</S.Button>
        </a>

        <button>공유하기</button>
      </div>
    </main>
  );
};
export default Results;

const S = {
  Button: styled.button`
    width: 60%;
    border-radius: 5px;
    border: 1px solid #979797;
    transform: translateY(-10px);
    @media all and (max-width: 500px) {
      height: 60px;
      color: #303030;
    }
  `,
};
