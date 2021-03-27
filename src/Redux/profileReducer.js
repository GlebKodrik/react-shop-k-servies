const SET_PHOTO = "profile/SET_PHOTO"
let initialState = {
    status: "",
    avatar: null,
}

const profileReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_PHOTO: {
            return {...state, avatar: action.file}
        }
        default:
            return state;
    }
}
const setPhoto = (file) => ({type: SET_PHOTO , file})

export const savePhoto = (file) => (dispatch) =>{
    dispatch(setPhoto(file))
}

export default profileReducer;