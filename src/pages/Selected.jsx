import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
import Results from './Results';
import { setSelectedAnswer, calculateResult } from '../reducer/actions';

const Selected = () => {
  const selectedAnswers = useSelector((state) => state.selectedAnswers);
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();

  const handleAnswerSelection = (questionIndex, answerIndex) => {
    dispatch(setSelectedAnswer(questionIndex, answerIndex));
  };

  const handleShowResult = () => {
    dispatch(calculateResult(selectedAnswers));
  };

  return (
    <div>
      {!result && (
        <Question
          selectedAnswers={selectedAnswers}
          onAnswerSelection={handleAnswerSelection}
          onShowResult={handleShowResult}
        />
      )}
      {result && <Results />}
    </div>
  );
};

export default Selected;
