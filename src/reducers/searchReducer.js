import * as types from '../actions/actionTypes';

const initialState = {
  match: false,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        match: true,
        results: action.data.results
      };
    case types.SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        match: false
      };
    case types.CLEAR_SEARCH_RESULTS:
      return initialState;
    default:
      return state;
  }
}
