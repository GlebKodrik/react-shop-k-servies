import { basketAPI } from "../api/api";
import { setAppMessage } from "./appReducer";

const ADD_BASKET = "basket/ADD_BASKET";
const REMOVE_BASKET = "basket/REMOVE_BASKET";
const GET_BASKET = "basket/GET_BASKET";
const SET_ERROR = "basket/SET_ERROR";

let initialState = {
  basket: null,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET: {
      return {
        ...state,
        basket: JSON.parse(localStorage.getItem("basket")) || [],
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
    default: {
      return state;
    }
  }
};

export const setError = (error) => ({ type: SET_ERROR, error });

export const getBasket = () => ({ type: GET_BASKET });

export const addBasket = (id) => ({ type: ADD_BASKET, id });

export const removeBasket = (id) => ({ type: REMOVE_BASKET, id });

export const sendReceipt = ({ nickname: name, ...data }) => async (
  dispatch
) => {
  const response = await basketAPI.sendMessage({ name, ...data });
  if (!!response.data.errors) {
    dispatch(setAppMessage("Ошибка при отправке!", "error"));
    return;
  }
  dispatch(setAppMessage("Заявка успешно оставлена!"));
};
export default basketReducer;
