import { adminAPI } from "../api/api";
import { removeBasket } from "./basketReducer";
import { removeFavorites } from "./favoriteReducer";
import { setAppMessage } from "./appReducer";
import { getCategories, getProductsCategory } from "./productsReducer";

const SET_PAGE = "admin/SET_PAGE";

let initialState = {
  actualPage: 0,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return {
        ...state,
        actualPage: action.page,
      };
    }
    default: {
      return state;
    }
  }
};

export const setPage = (page) => ({ type: SET_PAGE, page });

export const deleteProduct = ({ id }) => async (dispatch) => {
  const response = await adminAPI.deleteProduct(id);
  if (!!response.data.errors) {
    dispatch(setAppMessage(response.data.errors.product, "error"));
    return;
  }
  dispatch(removeBasket(id));
  dispatch(removeFavorites(id));
  dispatch(setAppMessage("Товар успешно удален!"));
};

export const deleteCategories = (id) => async (dispatch) => {
  let product = await dispatch(getProductsCategory(id));
  const response = await adminAPI.deleteCategories(id);
  if (!!response.data.errors) {
    dispatch(setAppMessage(response.data.errors.product, "error"));
    return;
  }
  dispatch(getCategories());
  return product;
};

export const createCategories = (data) => async (dispatch) => {
  const response = await adminAPI.createCategories(data);
  if (!!response.data.errors) {
    dispatch(setAppMessage("Произошла ошибка!", "error"));
    return;
  }
  dispatch(getCategories());
  dispatch(setAppMessage("Категория добавлена!"));
};

export const createProduct = (data) => async (dispatch) => {
  const response = await adminAPI.createProduct({ data });
  if (!!response.data.errors) {
    dispatch(setAppMessage("Произошла ошибка!", "error"));
    return;
  }
  dispatch(setAppMessage("Продукт добавлена!"));
};

export default adminReducer;
