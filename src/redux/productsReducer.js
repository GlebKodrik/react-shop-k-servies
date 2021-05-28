import { fetchProducts } from "../api/products";
import { productAPI } from "../api/api";

const SET_CARD_CATEGORY = "products/SET_CARD_CATEGORY";
const ADD_FAVORITE = "products/ADD_FAVORITE";
const REMOVE_FAVORITE = "products/REMOVE_FAVORITE";
const ADD_BASKET = "products/ADD_BASKET";
const REMOVE_BASKET = "products/REMOVE_BASKET";
const SET_PRODUCTS = "products/SET_PRODUCTS";
const GET_FAVORITES = "products/GET_FAVORITES";
const GET_BASKET = "products/GET_BASKET";

let initialState = {
  categories: [],
  products: [],
  favorites: null,
  basket: null,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET: {
      return {
        ...state,
        basket: JSON.parse(localStorage.getItem("basket")) || [],
      };
    }
    case GET_FAVORITES: {
      return {
        ...state,
        favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      };
    }
    case SET_CARD_CATEGORY: {
      return { ...state, categories: action.data };
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
    case ADD_BASKET: {
      return {
        ...state,
        basket: [...state.basket, { id: action.id }],
      };
    }
    case REMOVE_BASKET: {
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.id),
      };
    }
    case SET_PRODUCTS: {
      return { ...state, products: action.data };
    }

    default: {
      return state;
    }
  }
};
export const getFavorites = () => ({ type: GET_FAVORITES });
export const getBasket = () => ({ type: GET_BASKET });

export const addBasket = (id) => ({ type: ADD_BASKET, id });

export const removeBasket = (id) => ({ type: REMOVE_BASKET, id });

export const addFavorites = (id) => ({ type: ADD_FAVORITE, id });

export const removeFavorites = (id) => ({ type: REMOVE_FAVORITE, id });

export const setCardCategory = (data) => ({ type: SET_CARD_CATEGORY, data });

export const setProducts = (data) => ({ type: SET_PRODUCTS, data });

export const getCategories = () => async (dispatch) => {
  const response = await productAPI.getCategories();
  dispatch(setCardCategory(response.data.data));
};

export const getProducts = (id) => async (dispatch) => {
  const response = await fetchProducts(id);
  dispatch(setProducts(response.data));
};

export default productsReducer;
