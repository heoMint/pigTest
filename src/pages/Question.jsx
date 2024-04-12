import Header from '../components/Header';
import styled from 'styled-components';
import { qnaList } from '../data/data';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAnswer } from '../reducer/actions';
import img from '../assets/pig2.jpeg';

// eslint-disable-next-line react/prop-types
const Question = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedAnswers = useSelector((state) => state.selectedAnswers);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResultButton, setShowResultButton] = useState(false);
  const [showAnswers, setShowAnswers] = useState(true);

  const END_POINT = qnaList.length - 1;

  useEffect(() => {
    // console.log('Selected Answers:', selectedAnswers);
  }, [selectedAnswers]); // selectedAnswers 상태가 변화할 때마다 로깅

  const handleAnswerClick = (answerIndex) => {
    dispatch(setSelectedAnswer(currentQuestionIndex, answerIndex));

    if (currentQuestionIndex < END_POINT) {
      // 현재 질문이 qnaList보다 작으면 다음 문항으로 넘어간다.
      setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1));
    } else {
      setShowResultButton(true);
      setShowAnswers(false);
    }
  };

  const navigateResultsPage = () => {
    navigate('/result');
  };

  return (
    <main className='main'>
      <Header />
      <S.QuesWrapper>
        <S.Question>
          {showAnswers && qnaList[currentQuestionIndex].q}
        </S.Question>
        <S.ListWrapper>
          {showAnswers &&
            qnaList[currentQuestionIndex]?.a?.map((answerItem, answerIndex) => (
              <S.List
                key={answerIndex}
                onClick={() => handleAnswerClick(answerIndex)}
              >
                {answerItem.answer}
              </S.List>
            ))}
        </S.ListWrapper>
        {showResultButton && currentQuestionIndex === END_POINT && (
          <>
            <S.Img
              src={img}
              alt='배나온 돼지가 앉아있다'
            />

            <S.Button onClick={navigateResultsPage}>결과 보기</S.Button>
          </>
        )}
      </S.QuesWrapper>
    </main>
  );
};
const S = {
  QuesWrapper: styled.div`
    display: grid;
  `,
  Question: styled.p`
    font-size: 1.7rem;
    @media all and (max-width: 500px) {
      font-size: 1rem;
    }
  `,
  ListWrapper: styled.ol`
    width: 70%;
    display: grid;
    justify-items: center;
    @media all and (max-width: 500px) {
      width: 95%;
    }
  `,
  List: styled.li`
    list-style: none;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    @media all and (max-width: 500px) {
      font-size: 1rem;
    }
  `,
  Img: styled.img`
    width: 60%;
    transform: translateY(-40px);
    @media all and (max-width: 500px) {
      width: 90%;
    }
  `,
  Button: styled.button`
    width: 60%;
    border-radius: 5px;
    transform: translateY(-10px);
    @media all and (max-width: 500px) {
      height: 60px;
      border: 1px solid #979797;
      color: #303030;
    }
  `,
};
export default Question;
