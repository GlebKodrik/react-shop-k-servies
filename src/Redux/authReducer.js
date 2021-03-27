const SET_AUTH = 'auth/SET-AUTH';

let initialState = {
    isAuth: true,
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_AUTH: {
            return {...state,isAuth: action.isAuth}
        }
        default:
            return state;
    }
}
export const setAuth = (isAuth) => ({
    type: SET_AUTH, isAuth
});

export const logIn = (login , password , check) => (dispatch) => {
    dispatch(setAuth(true));
}
export const logOut = () => (dispatch) => {
    dispatch(setAuth(false));
}

export default authReducer;