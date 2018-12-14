import * as types from '../actions/actionTypes';
const initialState  = {
    match: false,
};

export default function articlesReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_ARTICLES_SUCCESS:

            return {
                ...state,
                match: true,
                results: action.response.results,
            };
        case types.GET_ARTICLES_FAILURE:
            return {
                ...state,
                match: false
            };
        case types.GET_ARTICLE_SUCCESS:
            return {
                ...state,
                match: true,
                result: action.response
            };
        case types.GET_ARTICLE_FAILURE:
            return {
                ...state,
                match: false
            };

        default:
            return state;
    }
}