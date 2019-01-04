import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from "../actions/actionTypes";
import registerFetch from "../api/registerFetch"

// const signupUrl = "";

function* register(action){
  // const request = yield call(registerFetch, action.users);
  console.log(action)

}

function* registerSaga(){
  yield takeLatest(types.REGISTER_REQUEST, register )
}

export default registerSaga;
