import { SET_CATEGORY, UPDATE_QUESTIONS } from '../actions/types';

let categoryState = {
  category: "",
  questions: []
};

export default function(state = categoryState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case UPDATE_QUESTIONS:
    return {
      ...state,
      questions: action.payload
    }
    default: 
      return state;
  }
}
