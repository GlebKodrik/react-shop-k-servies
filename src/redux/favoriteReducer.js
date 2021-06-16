const ADD_FAVORITE = "favorite/ADD_FAVORITE";
const REMOVE_FAVORITE = "favorite/REMOVE_FAVORITE";
const GET_FAVORITES = "favorite/GET_FAVORITES";
const SET_USERID = "favorite/SET_USERID";

let initialState = {
  favorites: [],
  userId: null,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES: {
      return {
        ...state,
        favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      };
    }
    case SET_USERID: {
      return {
        ...state,
        userId: action.id,
      };
    }
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [
          ...state.favorites,
          { userId: state.userId, id: action.id },
        ],
      };
    }
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((el) => {
          if (state.userId === el.userId) {
            return el.id !== action.id;
          } else return { ...el };
        }),
      };
    }
    default: {
      return state;
    }
  }
};
export const setUserId = (id) => ({ type: SET_USERID, id });

export const getFavorites = () => ({ type: GET_FAVORITES });

export const addFavorites = (id) => ({ type: ADD_FAVORITE, id });

export const removeFavorites = (id) => ({
  type: REMOVE_FAVORITE,
  id,
});

export default favoriteReducer;
