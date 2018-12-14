import * as types from '../actions/actionTypes';
const initialState  = {
  pageSizeActiveList: 5,
  searchQuery: '',
  startPagination: 2
};

export default function invoicesReducer(state = initialState, action) {
  switch(action.type) {
    case types.LIST_INVOICES_SUCCESS:
      return {
        ...state,
        activeList: action.data,
        pageActiveList: action.data
      };
    case types.SET_PAGE_SIZE_INVOICES:
      return {
        ...state,
        pageSizeActiveList: action.data
      };
    case types.SET_SEARCH_QUERY_INVOICES:
      return {
        ...state,
        searchQuery: action.data
      };
    case types.SET_START_PAGINATION:
      return {
        ...state,
        startPagination: action.data
      };
    case types.CLEAR_INVOICES:
    case types.CLEAR_START_PAGINATION:
      return initialState;
    default:
      return state;
  }
}
