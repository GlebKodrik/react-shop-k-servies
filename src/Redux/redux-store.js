import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import thunkMiddleware from "redux-thunk";
import headerReducer from "./headerReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
    headerContent: headerReducer,
    profilePage: profileReducer,
    auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;