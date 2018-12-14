import * as types from '../actions/actionTypes';
const initialState  = {
  currentObject: false,
  needUpdate: false
};

export default function buildingReducer(state = initialState, action) {
  switch(action.type) {
    case types.LIST_BUILDING_OBJECTS_SUCCESS:
      return {
        ...state,
        list: action.data,
        hasErrorWhileFetching: false,
        needUpdate: false
      };
    case types.LIST_BUILDING_OBJECTS_FAILURE:
      return {
        ...state,
        hasErrorWhileFetching: true
      };
    case types.SET_CURRENT_BUILDING_OBJECT:
      return {
        ...state,
        currentObject: action.data
      };
    case types.CLEAR_CURRENT_BUILDING_OBJECT:
      return {
        ...state,
        currentObject: false
      };
    case types.CLEAR_BUILDING_OBJECTS:
      return initialState;
    case types.DELETE_MATERIAL_SUCCESS:
      return {
        ...state,
        needUpdate: true
      };
    case types.UPDATE_MATERIAL_AMOUNT_SUCCESS:
      return {
        ...state,
        needUpdate: true
      };
    default:
      return state;
  }
}
