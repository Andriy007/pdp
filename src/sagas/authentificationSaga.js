// import { call, takeLatest, cancelled, put, take, cancel, fork } from 'redux-saga/effects'
// import * as types from './../actions/actionTypes';
// import {postSignupCreate, postPasswordReset, postLogoutCreate, postSignIn} from '../api/auth';
// import { push } from 'connected-react-router';
//
// function* signup(action) {
//
//   const response = yield call(postSignupCreate, action.userDetails);
//   /*201 Response Status - resource successfully created*/
//   if(response.status === 201){
//     yield put({type: types.SIGNUP_SUCCESS});
//   } else if(response.status === 400) {
//     yield put({type: types.SIGNUP_FAILURE, response});
//   } else {
//     yield put({type: types.SIGNUP_ERROR, response});
//
//     /*@TODO Ask where  to redirect after error?*/
//     yield put(push('/home'));
//   }
// }
//
// function* authorize(action) {
//   try {
//     /*Call server to get auth token*/
//     const response = yield call(postSignIn, action.credentials);
//     if(response.status === 200){
//       /*user successfully authed*/
//       yield put({type: types.LOGIN_SUCCESS, sessionId: response.data.sessionid});
//       /*redirect to main page after successfull Login*/
//       yield put(push('/'));
//     } else if(response.status === 403){
//       /*Used uncorrect credentials*/
//       yield put({type: types.LOGIN_ERROR_CREDENTIALS, response})
//     }
//   } catch(error) {
//     /*Server not responded*/
//     yield put({type: types.LOGIN_ERROR, error})
//   } finally {
//     /*PersonalCabinet cancelled request on the run*/
//     if (yield cancelled()) {
//       put({type: types.LOGIN_CANCELLED})
//     }
//   }
// }
//
// function* passwordReset(action) {
//   const response = yield call(postPasswordReset, action.credentials);
//   if(response.error){
//     yield put({type: types.PASSWORD_SEND_ERROR, response});
//   } else {
//     yield put({type: types.PASSWORD_RESET_SUCCESS, response});
//   }
// }
//
// function* logout() {
//   const response = yield call(postLogoutCreate);
//   if(response.status === 204){
//     yield put({type: types.LOGOUT_SUCCESS, token: response});
//   } else if(response.status === 401){
//     yield put({type: types.LOGOUT_FAILURE, token: response});
//   } else {
//     yield put({type: types.LOGOUT_ERROR, token: response});
//   }
// }
//
// /** init redux state after logout **/
// function* initState(){
//   yield put({type: types.CLEAR_CART});
//   yield put({type: types.CLEAR_CHECKOUT});
//   yield put({type: types.CLEAR_BUILDING_OBJECTS});
//   yield put({type: types.CLEAR_PROFILE});
// }
//
// function* authSaga() {
//
//   yield takeLatest(types.SIGNUP, signup);
//   yield takeLatest(types.PASSWORD_RESET_REQUEST, passwordReset);
//   yield takeLatest(types.LOGOUT_SUCCESS, initState);
//
//   /** set storage session to false **/
//   yield takeLatest(types.LOGOUT, logout);
//
//   while (true) {
//     const userData = yield take(types.LOGIN_REQUEST);
//     // fork return a Task object
//     const task = yield fork(authorize, userData);
//     const action = yield take([types.LOGIN_FAILURE, types.LOGIN_ERROR, types.LOGIN_ERROR_CREDENTIALS, types.LOGOUT]);
//
//     if(action.type !== types.LOGIN_ERROR_CREDENTIALS && action.type !== types.LOGOUT){
//       yield cancel(task);
//
//       /*set storage session to false*/
//       yield call(logout, action);
//     }
//   }
// }
//
// export default authSaga
