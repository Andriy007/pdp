import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../actions/actionTypes';
import { getMainImages } from "../api/mainImages";

function* getImages() {
  const response = yield call(getMainImages);
  if(response.status === 200) {
    yield put({type: types.GET_MAIN_IMAGES_SUCCESS, data: response.data});
  } else {
    yield put ({type: types.GET_MAIN_IMAGES_FAILURE})
  }
}

function* mainImagesSaga() {
  yield takeLatest(types.GET_MAIN_IMAGES, getImages);
}

export default mainImagesSaga;
