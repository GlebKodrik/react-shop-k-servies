const SET_USER = "auth/SET_USER";

let initialState = {
  client: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, client: action.client };
    }
    default:
      return state;
  }
};

export const setUser = (client) => ({ type: SET_USER, client });

export default userReducer;
