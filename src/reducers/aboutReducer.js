import * as types from '../actions/actionTypes';
const initialState  = [];

export default function aboutReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_ABOUT_SUCCESS:
      return action.about
    case types.LOAD_ABOUT_FAILURE:
      console.log(action.message)
      break
    default:
      return state;
  }
}
