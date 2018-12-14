import * as types from '../actions/actionTypes';

const initialState ={
  needUpdate: false
};

export default function wishListReducer(state = initialState, action){
  switch (action.type) {
    case types.GET_WISH_LIST_SUCCESS:
      return {
        ...state,
        list: action.data,
        needUpdate: false
      };
    case types.CLEAR_WISH_LIST:
      return initialState;
    case types.REMOVE_FROM_WISH_LIST_SUCCESS:
      return {
        ...state,
        needUpdate: true
      };
    default:
      return state
  }
}
