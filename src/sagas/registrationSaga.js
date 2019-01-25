import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router';
import * as types from "../actions/actionTypes";
import { userService } from "../api/user.service"


function* register(action){
  const response = yield call(userService.registerFetch, action.users);

  if (response) {
    yield put({type: types.REGISTER_SUCCESS, response});
    yield put(push('/authenticate'))

  }
  else {
    yield put({type: types.REGISTER_FAILURE});

  }

}

function* registerSaga(){
  yield takeLatest(types.REGISTER_REQUEST, register )
}

export default registerSaga;
