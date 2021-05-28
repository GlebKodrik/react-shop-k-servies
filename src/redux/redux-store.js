import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profileReducer";
import thunkMiddleware from "redux-thunk";
import headerReducer from "./headerReducer";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";
import appReducer from "./appReducer";

const reducer = combineReducers({
  headerContent: headerReducer,
  profilePage: profileReducer,
  auth: authReducer,
  products: productsReducer,
  user: userReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
