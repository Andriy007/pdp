import * as types from "../actions/actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_ARTICLE:
      return [...state, action.article];

    case types.DELETE_ARTICLE:
      return state.filter(({ id }) => id !== action.data);

    default:
      return state;
  }
}
