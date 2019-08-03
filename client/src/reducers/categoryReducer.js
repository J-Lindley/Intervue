import { SET_CATEGORY } from '../actions/types';

let categoryState = {
  category: ""
};

export default function(state = categoryState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        category: action.payload
      }
    default: 
      return state;
  }
}