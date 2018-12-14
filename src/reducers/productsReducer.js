import * as types from '../actions/actionTypes';

const initialState = {
  match: false,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        match: true,
        results: action.data.results,
        category: action.category,
        count: action.data.count
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        match: false
      };
    case types.ADD_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.product
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        match: true,
        result: action.data
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        match: false
      };
    case types.All_PRODUCTS_CHECK:
      return {
        ...state,
        allProductsCheck: true
      };
    case types.All_PRODUCTS_CHECK_CLEAR:
      return {
        ...state,
        allProductsCheck: false
      };
    case types.CLEAR_GET_PRODUCTS_RESULT:
      return {
        ...initialState,
        currentProduct: state.currentProduct
      };
    case types.CLEAR_GET_PRODUCT_RESULT:
      return initialState;
    default:
      return state;
  }
}
