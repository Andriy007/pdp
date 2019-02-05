import * as types from './../actions/actionTypes';

const initialState = {};

export default (state = initialState, action)=> {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {};
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.response
      };
    case types.LOGIN_FAILURE:
      return {};
    case types.LOGOUT:
      return {};
    default:
      return state
  }
}
