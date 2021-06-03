import { authThunk, meThunk } from "./authReducer";
import { getCategories } from "./productsReducer";
import { setInterceptor } from "../api/api";
import { getBasket } from "./basketReducer";
import { getFavorites } from "./favoriteReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";
const SET_MESSAGE = "app/SET_MESSAGE";
const CLEAR = "app/CLEAR";

let initialState = {
  initialized: false,
  message: null,
  isFetching: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    case SET_MESSAGE: {
      return {
        ...state,
        message: { text: action.message, type: action.property },
      };
    }
    case CLEAR: {
      return {
        ...state,
        message: null,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const setAppMessage = (message, property) => ({
  type: SET_MESSAGE,
  message,
  property,
});

export const clearProcessing = () => ({ type: CLEAR });

export const initializeApp = () => async (dispatch) => {
  setInterceptor((user) => dispatch(authThunk(user)));
  await dispatch(getBasket());
  await dispatch(getCategories());
  await dispatch(meThunk());
  await dispatch(getFavorites());
  dispatch(initializedSuccess());
};
export default appReducer;
