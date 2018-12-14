import * as types from '../actions/actionTypes';
const initialState  = {
  result: {},
  needUpdate: false,
  buyInfo: {}
};

export default function cartReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_CART_LIST_SUCCESS:
      return {
        ...state,
        result: action.data,
        needUpdate: false,
      };
    case types.GET_CART_LIST_FAILURE:
      return {
        ...state,
        result: 'error'
      };
    case types.ADD_TO_CART_LIST_SUCCESS:
      return {
        ...state
      };
    case types.ADD_TO_CART_LIST_FAILURE:
      return {
        ...state,
        hasErrorWhileAddItem: true,
      };
    case types.REMOVE_FROM_CART_LIST_SUCCESS:
      delete state.buyInfo[Object.entries(state.buyInfo).find((item) => {return item[1].id === action.id})[0]];
      return {
        ...state,
        needUpdate: true,
      };
    case types.REMOVE_FROM_CART_LIST_FAILURE:
      return {
        ...state,
        hasErrorWhileRemoveItem: true
      };
    case types.CHANGE_CART_INFO:
      return {
        ...state,
        buyInfo: {
          ...state.buyInfo,
          ...action.data
        }
      };
    case types.CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
