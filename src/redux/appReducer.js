import { authThunk, meThunk } from "./authReducer";
import { getBasket, getCategories, getFavorites } from "./productsReducer";
import { setInterceptor } from "../api/api";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => async (dispatch) => {
  setInterceptor((user) => dispatch(authThunk(user)));
  await dispatch(getCategories());
  await dispatch(meThunk());
  await dispatch(getBasket());
  await dispatch(getFavorites());
  dispatch(initializedSuccess());
};

export default appReducer;
