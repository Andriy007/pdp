import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../actions/actionTypes';
import { getProfileRead, putProfileUpdate } from '../api/profile';

function* getProfileData() {
  const response = yield call(getProfileRead);
  if(response.status === 200){
    yield put({type: types.GET_PROFILE_DATA_SUCCESS, data: response.data});
  } else {
    yield put({type: types.GET_PROFILE_DATA_FAILURE});
  }
}

function* updateProfileData(action){
  const response = yield call(putProfileUpdate, action.data);
  if(response.status === 200){
    yield put({type: types.UPDATE_PROFILE_DATA_SUCCESS});
  } else {
    yield put({type: types.UPDATE_PROFILE_DATA_FAILURE});
  }
}

function* profileSaga() {
  yield takeLatest(types.GET_PROFILE_DATA_REQUEST, getProfileData);
  yield takeLatest(types.UPDATE_PROFILE_DATA_REQUEST, updateProfileData);
  yield takeLatest(types.UPDATE_PROFILE_DATA_SUCCESS, getProfileData);
}

export default profileSaga;
