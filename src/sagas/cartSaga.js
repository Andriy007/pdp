// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as types from './../actions/actionTypes';
// import { getCartRead, postAddProduct, deleteRemoveProduct } from '../api/cart';
//
// function* getCartList() {
//   yield put({type: types.FETCH_REQUEST});
//   const response = yield call(getCartRead);
//   if(response.status === 200) {
//     yield put({type: types.GET_CART_LIST_SUCCESS, data: response.data});
//   } else {
//     yield put({type: types.GET_CART_LIST_FAILURE});
//   }
//   yield put ({type: types.FETCH_RECEIVE});
// }
//
// function* addToCartList(action){
//   const response = yield call(postAddProduct, action.id);
//   if(response.status === 200) {
//     yield put({type: types.ADD_TO_CART_LIST_SUCCESS});
//     yield put({type: types.GET_PRODUCTS_REQUEST, data: action.category});
//   } else {
//     yield put({type: types.ADD_TO_CART_LIST_FAILURE});
//   }
// }
//
// function* removeItemFromCartList(action){
//   const response = yield call(deleteRemoveProduct, action.id);
//   if(response.status === 204) {
//     yield put({type: types.REMOVE_FROM_CART_LIST_SUCCESS, data: response.data, id: action.id});
//   } else {
//     yield put({type: types.REMOVE_FROM_CART_LIST_FAILURE});
//   }
// }
//
// function* cartSaga() {
//   yield takeLatest(types.GET_CART_LIST_REQUEST, getCartList);
//   yield takeLatest(types.ADD_TO_CART_LIST_REQUEST, addToCartList);
//   yield takeLatest(types.REMOVE_FROM_CART_LIST_REQUEST, removeItemFromCartList)
// }
//
// export default cartSaga;
