export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER';
export const CALCULATE_RESULT = 'CALCULATE_RESULT';

export const setSelectedAnswer = (questionIndex, answerIndex) => ({
  type: SET_SELECTED_ANSWER,
  payload: { questionIndex, answerIndex },
});

export const calculateResult = (selectedAnswers) => ({
  
  type: CALCULATE_RESULT,
  payload: { selectedAnswers },
});
