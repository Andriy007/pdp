import * as types from './actionTypes';

/******** INIT SESSION ********/
export const initSession = () => ({type: types.INIT_SESSION_REQUEST});

/******** FETCHING CONTROL ********/
export const fetchRequest = () => ({type: types.FETCH_REQUEST});
export const fetchReceive = () => ({type: types.FETCH_RECEIVE});

/******** MAIN IMAGES ********/
export const getMainImages = () => ({type: types.GET_MAIN_IMAGES});

/******** AUTH ********/
export const authorize = (credentials) => ({type: types.LOGIN_REQUEST, credentials});
export const logout = (token) => ({type: types.LOGOUT, token});
export const signup = (userDetails) => ({ type: types.SIGNUP, userDetails });
export const passwordReset = (credentials) => ({type: types.PASSWORD_RESET_REQUEST, credentials});

/******** SEARCH PRODUCTS ********/
export const searchProducts = (data) => ({ type: types.SEARCH_PRODUCTS_REQUEST, data });
export const clearSearchResult = () => ({type: types.CLEAR_SEARCH_RESULTS});

/******** MODAL ********/
export const showModal = (type, props) => ({
  type: types.SHOW_MODAL,
  payload: {
    type,
    props
  }
});

export const hideModal = () => ({
  type: types.HIDE_MODAL
});

/******** CATEGORIES ********/
export const getCategories = () => ({ type: types.GET_CATEGORIES_REQUEST });

/******** PRODUCT LIST ********/
export const getProducts = (data) => ({ type: types.GET_PRODUCTS_REQUEST, data });
export const clearProductsResult = () => ({ type: types.CLEAR_GET_PRODUCTS_RESULT });
export const allProductsCheck = () => ({ type: types.All_PRODUCTS_CHECK });
export const allProductsCheckClear = () => ({ type: types.All_PRODUCTS_CHECK_CLEAR });

/******** PRODUCT ********/
export const getProduct = (data) => ({ type: types.GET_PRODUCT_REQUEST, data });
export const clearProductResult = () => ({ type: types.CLEAR_GET_PRODUCT_RESULT });
export const addCurrentProduct = (product) => ({ type: types.ADD_CURRENT_PRODUCT, product });

/******** BUILDING ********/
export const createBuildingObject = (data) => ({type: types.CREATE_BUILDING_OBJECT_REQUEST, data});
export const listBuildingObjects = (data) => ({type: types.LIST_BUILDING_OBJECTS_REQUEST, data});
export const setCurrentBuildingObject = (data) => ({type: types.SET_CURRENT_BUILDING_OBJECT, data});
export const clearCurrentBuildingObject = () => ({type: types.CLEAR_CURRENT_BUILDING_OBJECT});
export const deleteMaterial = (id) => ({ type: types.DELETE_MATERIAL_REQUEST, id });
export const updateMaterialAmount = (id, amount) => ({ type: types.UPDATE_MATERIAL_AMOUNT_REQUEST, id, amount });

/******** CART ********/
export const getCartList = () => ({type: types.GET_CART_LIST_REQUEST});
export const addToCartList = (id, category) => ({type: types.ADD_TO_CART_LIST_REQUEST, id, category});
export const removeItemFromCartList = (id) => ({type: types.REMOVE_FROM_CART_LIST_REQUEST, id});
export const changeBuyInfo = (data) => ({type: types.CHANGE_CART_INFO, data});

/******** CHECKOUT ********/
export const getStripeToken = () => ({type: types.GET_STRIPE_TOKEN_REQUEST});
export const addInfoToCheckoutObject = (data) => ({type: types.ADD_INFO_TO_CHECKOUT_OBJECT, data});
export const addBuildingObject = (data) => ({type: types.ADD_BUILDING_OBJECT, data});
export const deleteBuildingObject = (data) => ({type: types.DELETE_BUILDING_OBJECT, data});
export const clearBuildingObjectsCheckout = () => ({type: types.CLEAR_BUILDING_OBJECTS_CHECKOUT});
export const addShippingAddress = (data) => ({type: types.ADD_SHIPPING_ADDRESS, data});
export const addCardInfo = (data) => ({type: types.ADD_CARD_INFO, data});
export const confirmOrder = (data) => ({type: types.CONFIRM_ORDER_REQUEST, data});
export const confirmOrderModalClose = () => ({type: types.CONFIRM_ORDER_MODAL_CLOSE});

/******** PROFILE ********/
export const getProfileData = () => ({type: types.GET_PROFILE_DATA_REQUEST});
export const updateProfileData = (data) => ({type: types.UPDATE_PROFILE_DATA_REQUEST, data});

/******** INVOICES ********/
export const getInvoicesList = (data) => ({type: types.LIST_INVOICES_REQUEST, data});
export const clearInvoices = () => ({type: types.CLEAR_INVOICES});
export const setPageSizeInvoices = (data) => ({type: types.SET_PAGE_SIZE_INVOICES, data});
export const setSearchQueryInvoices = (data) => ({type: types.SET_SEARCH_QUERY_INVOICES, data});

/******** WISH LIST ********/
export const addToWishList = (id, category) => ({type: types.ADD_TO_WISH_LIST_REQUEST, id, category});
export const removeFromWishList = (id, category) => ({type: types.REMOVE_FROM_WISH_LIST_REQUEST, id, category});
export const getWishList = () => ({type: types.GET_WISH_LIST_REQUEST});
export const clearWishList = () => ({type: types.CLEAR_WISH_LIST});

/******** ARTICLE LIST ********/
export const getArticles = (data) => ({ type: types.GET_ARTICLES_REQUEST, data });

/******** ARTICLE ********/
export const getArticle = (data) => ({ type: types.GET_ARTICLE_REQUEST, data });

/******** PAGINATION ********/
export const setStartPagination = (data) => ({ type: types.SET_START_PAGINATION, data });
export const clearStartPagination = () => ({ type: types.CLEAR_START_PAGINATION });