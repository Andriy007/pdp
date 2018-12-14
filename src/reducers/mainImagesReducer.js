import * as types from '../actions/actionTypes'

const initialState = {
  hasErrorWhileFetching: false
};

export default function mainImagesReducer(state = initialState, action) {
  switch(action.type){
    case types.GET_MAIN_IMAGES_SUCCESS:
      return {
        data: action.data,
        hasErrorWhileFetching: false
      };
    case types.GET_MAIN_IMAGES_FAILURE:
      return {
        hasErrorWhileFetching: true
      };
    default:
      return state;
  }
}