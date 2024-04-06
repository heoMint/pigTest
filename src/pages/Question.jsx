import Header from "../components/Header";
import styled from "styled-components";
import { qnaList } from "../data/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResultButton, setShowResultButton] = useState(false);
  const [showAnswers, setShowAnswers] = useState(true);
  const navigate = useNavigate();

  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);
    if (currentQuestionIndex < qnaList.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 300); // 다음 문항으로 넘어가는 속도
    } else {
      setShowResultButton(true);
      setShowAnswers(false);
    }
  };

  const navigateResultsPage = () => {
    navigate("/result");
  };

  return (
    <main className="main">
      <Header />
      <div>
        <S.Question>
          {showAnswers && qnaList[currentQuestionIndex].q}
        </S.Question>
        <S.ListWrapper>
          {showAnswers &&
            qnaList[currentQuestionIndex].a.map((answerItem, answerIndex) => (
              <S.List
                key={answerIndex}
                onClick={() => handleAnswerClick(answerIndex)}
              >
                {answerItem.answer}
              </S.List>
            ))}
        </S.ListWrapper>
        {showResultButton && currentQuestionIndex === qnaList.length - 1 && (
          <button onClick={navigateResultsPage}>결과 보기</button>
        )}
      </div>
    </main>
  );
};
const S = {
  Question: styled.p`
    font-size: 1.7rem;
  `,
  ListWrapper: styled.ol`
    width: 70%;
    display: grid;
    justify-items: center;
  `,
  List: styled.li`
    list-style: none;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    margin: 15px;
    cursor: pointer;
  `,
};
export default Question;
