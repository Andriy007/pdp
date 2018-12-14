import * as types from '../actions/actionTypes';
const initialState  = {};

export default function profileReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        personalInfo: action.data
      };
    case types.CLEAR_PROFILE:
      return initialState;
    default:
      return state;
  }
}
