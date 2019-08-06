import axios from "axios";
import { FETCH_USER, SET_CATEGORY, UPDATE_QUESTIONS } from "./types";

export const fetchUser = () => dispatch => {
  axios
    .get("/api/current_user")
    .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
};

export const setCategory = category => {
    console.log("Category: " + category);
  return {
    type: SET_CATEGORY,
    payload: category
  };
};

export const updateCategoryQuestions = questions => {
    let objectKeys = Object.keys(questions.data);
    let arrayOfQuestions = [];
    objectKeys.forEach(key => {
        arrayOfQuestions.push(questions.data[`${key}`])
    });
  return {
    type: UPDATE_QUESTIONS,
    payload: arrayOfQuestions
  };
};

export const updateCategory = category => {
  return dispatch => {
    axios
      .get("/api/questions/category/" + category)
      .then(res => dispatch(updateCategoryQuestions(res)))
      .then(() => dispatch(setCategory(category)))
      .catch(err => console.log(err));
  };
};
