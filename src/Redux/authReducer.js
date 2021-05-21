import {authAPI} from "../api/api";

const SET_AUTH = "auth/SET_AUTH";
const SET_USER = "auth/SET_USER";

let initialState = {
  isAuth: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return { ...state, isAuth: action.isAuth };
    }
    case SET_USER: {
      return { ...state, user: action.user };
    }
    default:
      return state;
  }
};

export const setAuth = (isAuth) => ({
  type: SET_AUTH,
  isAuth,
});

export const setUser = (user) => ({type: SET_USER ,  user});

export const logUpThunk = (user) => async (dispatch) => {
  let response = await authAPI.logUp(user);
  if(!!response.data.errors){
    return;
  }

}

export const meThunk = () => async (dispatch) => {
  const response = await authAPI.me();
  dispatch(setUser(response.data.data));
  dispatch(setAuth(!response.data.errors));
}
export const authThunk = (user) => (dispatch) => {
  dispatch(setAuth(!!user));
  dispatch(setUser(user));
}

export const logIn = ({email , password}) => async (dispatch) => {
  const response = await authAPI.logIn(email , password)
  if(!!response.data.errors){
    return;
  }
  dispatch(setAuth(true));
};
export const logOut = () => async (dispatch) => {
  let response = await authAPI.logOut();
  if(!!response.data.errors){
    return;
  }
  dispatch(setAuth(false));
};

export default authReducer;
