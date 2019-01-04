import * as types from "../actions/actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_GROUP:
      return [...state, action.group];

    case types.DELETE_GROUP:
      return state.filter(data => data.id !== action.id);

    default:
      return state;
  }
}
