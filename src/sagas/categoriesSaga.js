// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as types from './../actions/actionTypes';
// import { getNestedList } from "../api/categories";
//
// function* getCategories() {
//   const response = yield call(getNestedList);
//   if (response.status === 200) {
//     yield put({type: types.GET_CATEGORIES_SUCCESS, data: response.data});
//   } else {
//     yield put({type: types.GET_CATEGORIES_FAILURE});
//   }
// }
//
// function* categoriesSaga() {
//   yield takeLatest(types.GET_CATEGORIES_REQUEST, getCategories);
// }
//
// export default categoriesSaga
