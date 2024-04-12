import { combineReducers } from 'redux';
import { SET_SELECTED_ANSWER, CALCULATE_RESULT } from './actions';
import { qnaList, infoList } from '../data/data';

const initialState = [];

export const selectedAnswersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      // eslint-disable-next-line no-case-declarations
      const { questionIndex, answerIndex } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const updatedAnswer = [...state];
      updatedAnswer[questionIndex] = answerIndex;
      return updatedAnswer;
    default:
      return state;
  }
};
export const resultReducer = (state = null, action) => {
  switch (action.type) {
    case CALCULATE_RESULT:
      // eslint-disable-next-line no-case-declarations
      const { selectedAnswers } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const typeCount = {}; // type을 기반으로 선택된 횟수를 저장하는 객체

      selectedAnswers.forEach((answerIndex, questionIndex) => {
        if (
          answerIndex !== null &&
          answerIndex !== undefined &&
          answerIndex < qnaList[questionIndex].a.length
        ) {
          const selectedTypes = qnaList[questionIndex].a[answerIndex].type;
          selectedTypes.forEach((type) => {
            if (typeCount[type]) {
              typeCount[type] += 1;
            } else {
              typeCount[type] = 1;
            }
          });
        }
      });

      // 가장 많이 선택된 type 찾기
      // eslint-disable-next-line no-case-declarations
      const maxType = Object.keys(typeCount).reduce((a, b) =>
        typeCount[a] > typeCount[b] ? a : b
      );

      // infoList에서 해당 type을 포함하는 항목 찾기
      // eslint-disable-next-line no-case-declarations
      const result = infoList.find((item) => item.type.includes(maxType));
      // 일치하는 항목을 반환하거나, 없다면 기존 상태 유지
      return result ? result : state; 
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  selectedAnswers: selectedAnswersReducer,
  result: resultReducer,
});

export default rootReducer;
