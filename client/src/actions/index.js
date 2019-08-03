import axios from "axios";
import { FETCH_USER, SET_CATEGORY } from "./types";

export const fetchUser = () => dispatch => {
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };

export const setCategory = category => {   
    return {
        type: SET_CATEGORY, payload: category
    }
  };