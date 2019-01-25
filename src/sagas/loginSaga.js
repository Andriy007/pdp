import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router';
import * as types from "../actions/actionTypes";
import { userService } from "../api/user.service"


function* login(action){

  const response = yield call(userService.loginFetch, action.payload);

  if (response) {
    yield put({type: types.LOGIN_SUCCESS, response});
    yield put(push('/home'))

  }
  else {
    yield put({type: types.LOGIN_FAILURE});

  }

}

function* loginSaga(){
  yield takeLatest(types.LOGIN_REQUEST, login )
}

export default loginSaga;
