import { fetchCategories, fetchProducts } from "../api/products";

const SET_CARD_CATEGORY = "products/SET_CARD_CATEGORY";

const SET_PRODUCTS = "products/SET_PRODUCTS";

let initialState = {
  categories: [],
  products: [],
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_CATEGORY: {
      return { ...state, categories: action.data };
    }
    case SET_PRODUCTS: {
      return { ...state, products: action.data };
    }
    default: {
      return state;
    }
  }
};
export const setCardCategory = (data) => ({ type: SET_CARD_CATEGORY, data });

export const setProducts = (data) => ({ type: SET_PRODUCTS, data });

export const getCategories = () => async (dispatch) => {
  const response = await fetchCategories();
  dispatch(setCardCategory(response.data));
};

export const getProducts = (id) => async (dispatch) => {
  const response = await fetchProducts(id);
  dispatch(setProducts(response.data));
};

export default productsReducer;
