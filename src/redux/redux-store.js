import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import headerReducer from "./headerReducer";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import basketReducer from "./basketReducer";
import favoriteReducer from "./favoriteReducer";
import adminReducer from "./adminReducer";

const reducer = combineReducers({
  headerContent: headerReducer,
  auth: authReducer,
  products: productsReducer,
  user: userReducer,
  app: appReducer,
  basket: basketReducer,
  favorite: favoriteReducer,
  admin: adminReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
