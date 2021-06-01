import { productAPI } from "../api/api";
import { removeBasket } from "./basketReducer";
import { removeFavorites } from "./favoriteReducer";
import { logDOM } from "@testing-library/react";

const SET_ERROR = "admin/SET_ERROR";
const SET_DONE = "admin/SET_DONE";

let initialState = {
  error: null,
  done: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return {
        ...state,
        error: action.message,
      };
    }
    case SET_DONE: {
      return {
        ...state,
        done: action.message,
      };
    }
    default: {
      return state;
    }
  }
};

export const setError = (message) => ({ type: SET_ERROR, message });
export const setDone = (message) => ({ type: SET_DONE, message });

export const deleteProduct = ({ id }) => async (dispatch) => {
  const response = await productAPI.deleteProduct(id);
  if (!!response.data.errors) {
    dispatch(setDone(false));
    dispatch(setError(response.data.errors.product));
    return;
  }
  dispatch(removeBasket(id));
  dispatch(removeFavorites(id));
  dispatch(setError(null));
  dispatch(setDone(true));
};

export default adminReducer;
