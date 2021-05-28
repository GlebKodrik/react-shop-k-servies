import { authAPI } from "../api/api";
import { setUser } from "./userReducer";

const SET_AUTH = "auth/SET_AUTH";

let initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return { ...state, isAuth: action.isAuth };
    }
    default:
      return state;
  }
};

export const setAuth = (isAuth) => ({
  type: SET_AUTH,
  isAuth,
});

export const meThunk = () => async (dispatch) => {
  try {
    const response = await authAPI.me();
    dispatch(setUser(response.data.data));
    dispatch(setAuth(!response.data.errors));
  } catch (e) {
    dispatch(setUser(null));
    dispatch(setAuth(false));
  }
};

export const authThunk = (user) => (dispatch) => {
  dispatch(setAuth(!!user));
  dispatch(setUser(user));
};

export const logOut = () => async (dispatch) => {
  let response = await authAPI.logOut();
  if (!!response.data.errors) {
    return;
  }
  dispatch(setAuth(false));
};

export default authReducer;
