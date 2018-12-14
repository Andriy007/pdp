// import { call, put, takeLatest } from 'redux-saga/effects'
// import { aboutApi } from './../api';
// import * as types from './../actions/actionTypes';
//
// function* fetchAbout(action) {
//   try {
//     const about = yield call(aboutApi, action.payload.userId);
//     yield put({type: types.LOAD_ABOUT_SUCCESS, about});
//   } catch (e) {
//     yield put({type: types.LOAD_ABOUT_FAILURE, message: e.message});
//   }
// }
//
// function* counterSaga() {
//   yield takeLatest(types.ABOUT_FETCH_REQUESTED, fetchAbout);
// }
//
// export default counterSaga
