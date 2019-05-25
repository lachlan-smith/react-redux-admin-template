// // src/js/store/index.js

import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "../reducers/index";

// middleware
import { forbiddenWordsMiddleware } from "../middleware"


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddleware = () => {
    return applyMiddleware(forbiddenWordsMiddleware);
}

const store = createStore(combineReducers, storeEnhancers( getMiddleware() ) );

export default store;
