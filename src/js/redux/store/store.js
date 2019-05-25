// // src/js/store/index.js

import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "../reducers/index";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers, storeEnhancers(  ) );

export default store;
