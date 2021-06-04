const ADD_FAVORITE = "favorite/ADD_FAVORITE";
const REMOVE_FAVORITE = "favorite/REMOVE_FAVORITE";
const GET_FAVORITES = "favorite/GET_FAVORITES";

let initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES: {
      return {
        ...state,
        favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      };
    }
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, { id: action.id }],
      };
    }
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
};

export const getFavorites = () => ({ type: GET_FAVORITES });

export const addFavorites = (id) => ({ type: ADD_FAVORITE, id });

export const removeFavorites = (id) => ({ type: REMOVE_FAVORITE, id });

export default favoriteReducer;
