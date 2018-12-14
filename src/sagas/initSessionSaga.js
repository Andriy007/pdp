// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as types from '../actions/actionTypes';
// import { getSessionId } from "../api/auth";
// import {getCurrencyRead} from '../api/currency';
//
// function* initSession() {
//     const response = yield call(getSessionId);
//     if(response.status === 200){
//         yield put({type: types.INIT_SESSION_SUCCESS});
//         yield put({type: types.GET_CURRENCY_REQUEST});
//     } else {
//         yield put({type: types.INIT_SESSION_FAILURE})
//     }
// }
//
// function* getCurrency(action) {
//   const query = action.data;
//   const response = yield call(getCurrencyRead, query);
//   response
//     ? yield put({type: types.GET_CURRENCY_SUCCESS, response: response})
//     : yield put({type: types.GET_CURRENCY_FAILURE, response: response});
// }
//
// function* initSessionSaga() {
//     yield takeLatest(types.INIT_SESSION_REQUEST, initSession);
//     yield takeLatest(types.GET_CURRENCY_REQUEST, getCurrency);
// }
//
// export default initSessionSaga
