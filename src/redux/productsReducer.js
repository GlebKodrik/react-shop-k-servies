import { productAPI } from "../api/api";

const SET_CARD_CATEGORY = "products/SET_CARD_CATEGORY";
const SET_PRODUCTS = "products/SET_PRODUCTS";
const SET_ERROR = "products/SET_ERROR";
const SET_DONE = "products/SET_DONE";
const SET_PRODUCT = "products/SET_PRODUCT";
const TOGGLE_IS_FETCHING = "products/TOGGLE-IS-FETCHING";
const SET_BOX_PRODUCT = "products/SET_BOX_PRODUCT";
const CLEAR_BOX_PRODUCT = "products/CLEAR_BOX_PRODUCT";
let initialState = {
  categories: [],
  products: [],
  error: null,
  done: null,
  isFetching: false,
  product: null,
  boxProduct: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_CATEGORY: {
      return { ...state, categories: action.data };
    }
    case SET_BOX_PRODUCT: {
      return { ...state, boxProduct: [...state.boxProduct, action.data] };
    }
    case SET_PRODUCTS: {
      return { ...state, products: action.data };
    }
    case SET_ERROR: {
      return { ...state, error: action.error };
    }
    case SET_PRODUCT: {
      return { ...state, product: action.product };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case CLEAR_BOX_PRODUCT: {
      return {
        ...state,
        boxProduct: [],
      };
    }
    default: {
      return state;
    }
  }
};

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const clearBoxProduct = () => ({ type: CLEAR_BOX_PRODUCT });

export const setProduct = (product) => ({ type: SET_PRODUCT, product });

export const setError = (error) => ({ type: SET_ERROR, error });

export const setDone = (message) => ({ type: SET_DONE, message });

export const setCardCategory = (data) => ({ type: SET_CARD_CATEGORY, data });

export const setProducts = (data) => ({ type: SET_PRODUCTS, data });
export const setBoxProducts = (data) => ({ type: SET_BOX_PRODUCT, data });
export const getCategories = () => async (dispatch) => {
  const response = await productAPI.getCategories();
  dispatch(setCardCategory(response.data.data));
};

export const getProductsCategory = (id) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await productAPI.getProductsCategory(id);
  dispatch(setProducts(response.data.data));
  dispatch(toggleIsFetching(false));
};
export const getProduct = (id) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await productAPI.getProduct(id);
  if (!!response.data.error) {
    dispatch(toggleIsFetching(false));
    return;
  }
  dispatch(setProduct(response.data.data));
  dispatch(toggleIsFetching(false));
};

export const getProducts = (id) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await productAPI.getProduct(id);
  if (!!response.data.error) {
    dispatch(toggleIsFetching(false));
    return;
  }
  dispatch(setBoxProducts(response.data.data));
  dispatch(toggleIsFetching(false));
};

export default productsReducer;
