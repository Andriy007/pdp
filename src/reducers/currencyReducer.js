import * as types from '../actions/actionTypes';
const initialState  = {};

export default function currencyReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_CURRENCY_SUCCESS:
      return {
        ...state,
        results: action.response,
      };
    case types.GET_CURRENCY_FAILURE:
      return {
        ...state,
        results: 'error'
      };

    default:
      return state;
  }
}