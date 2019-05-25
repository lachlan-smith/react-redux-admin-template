// src/js/middleware/index.js

import { ADD_ARTICLE } from "../constants/actionTypes";

const forbiddenWords = ["spam", "money"];

// When action.type is ADD_ARTICLE it will check action.payload.title
// If it contains a forbidden word it will dispatch action of type "FOUND_BAD_WORD"
export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            // logic

            if (action.type === ADD_ARTICLE) {

                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );

                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" })
                }

            }

            return next(action);
        };
    };
}