// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as types from './../actions/actionTypes';
// import { getPaymentRead } from '../api/payment';
// import { postCartCreate } from '../api/cart';
// import { push } from 'connected-react-router';
//
// function* getStripeToken() {
//   const response = yield call(getPaymentRead);
//   if(response.status === 200) {
//     yield put({type: types.GET_STRIPE_TOKEN_SUCCESS, data: response.data});
//   } else {
//     yield put({type: types.GET_STRIPE_TOKEN_FAILURE});
//   }
// }
//
// function* confirmOrder(action){
//   const response = yield call(postCartCreate, action.data);
//   if(response.status === 201){
//     yield put({type: types.CONFIRM_ORDER_SUCCESS});
//     yield put({type: types.SHOW_MODAL, payload: {type: types.MODAL_TYPE_CONFIRM_ORDER_SUCCESS}});
//   } else {
//     yield put({type: types.CONFIRM_ORDER_FAILURE});
//   }
// }
//
// function* initState(){
//   yield put({type: types.CLEAR_CART});
//   yield put({type: types.CLEAR_CHECKOUT});
//   yield put(push('/catalogue'));
// }
//
// function* checkoutSaga() {
//   yield takeLatest(types.GET_STRIPE_TOKEN_REQUEST, getStripeToken);
//   yield takeLatest(types.CONFIRM_ORDER_REQUEST, confirmOrder);
//   yield takeLatest(types.CONFIRM_ORDER_MODAL_CLOSE, initState);
// }
//
// export default checkoutSaga;
