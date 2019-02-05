import * as types from './../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ERROR:
      return {
        message: action.error
      };
    case types.CLEAR:
      return initialState;

    default:
      return state
  }
}
