import * as types from '../actions/actionTypes';

const initialState = {
  match: false,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        match: true,
        results: action.data
      };
    case types.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        match: false
      };
    default:
      return state;
  }
}
