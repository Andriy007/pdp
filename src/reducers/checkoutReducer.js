import * as types from '../actions/actionTypes';
const initialState  = {
  buildingObjects: [],
  shippingAddress: {
    country: '',
    city: '',
    street: '',
    state: '',
    zipCode: '',
  }
};

export default function checkoutReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_STRIPE_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.data.token,
        hasErrorWhileFetching: false
      };
    case types.GET_STRIPE_TOKEN_FAILURE:
      return {
        ...state,
        hasErrorWhileFetching: true
      };
    case types.ADD_INFO_TO_CHECKOUT_OBJECT:
      return {
        ...state,
        object: action.data
      };
    case types.ADD_CARD_INFO:
      return {
        ...state,
        cardInfo: action.data
      };
    case types.ADD_BUILDING_OBJECT:
      return {
        ...state,
        buildingObjects: [...state.buildingObjects, action.data]
      };
    case types.DELETE_BUILDING_OBJECT:
      state.buildingObjects.splice(state.buildingObjects.indexOf(action.data), 1);
      return state;
    case types.CLEAR_BUILDING_OBJECTS_CHECKOUT:
      return {
        ...state,
        buildingObjects: []
      };
    case types.ADD_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.data
      };
    case types.CLEAR_CHECKOUT:
      return initialState;
    default:
      return state;
  }
}
