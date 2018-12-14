// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as types from './../actions/actionTypes';
// import { postObjectsCreate, getObjectsList, deleteMaterialsDelete, putMaterialsUpdate } from './../api/building';
//
// function* createObject(action) {
//   const response = yield call(postObjectsCreate, action.data);
//   if(response.status === 201) {
//     yield put({type: types.CREATE_BUILDING_OBJECT_SUCCESS});
//   } else {
//     yield put({type: types.CREATE_BUILDING_OBJECT_FAILURE});
//   }
// }
//
// function* listBuildingObjects(){
//   yield put({type: types.FETCH_REQUEST});
//   const response = yield call(getObjectsList);
//   if(response.status === 200) {
//     yield put({type: types.LIST_BUILDING_OBJECTS_SUCCESS, data: response.data});
//   } else {
//     yield put({type: types.LIST_BUILDING_OBJECTS_FAILURE});
//   }
//   yield put({type: types.FETCH_RECEIVE});
// }
//
// function* deleteFromMaterials(action) {
//   const response = yield call(deleteMaterialsDelete, action.id);
//   if(response.status === 204) {
//     yield put({type: types.DELETE_MATERIAL_SUCCESS});
//   } else {
//     yield put({type: types.DELETE_MATERIAL_FAILURE});
//   }
// }
//
// function* updateMaterialAmount(action) {
//   const response = yield call(putMaterialsUpdate, action.id, action.amount);
//   if(response.status === 200) {
//     yield put({ type: types.UPDATE_MATERIAL_AMOUNT_SUCCESS });
//   } else {
//     yield put({ type: types.UPDATE_MATERIAL_AMOUNT_FAILURE });
//   }
// }
//
// function* buildingSaga() {
//   yield takeLatest(types.CREATE_BUILDING_OBJECT_REQUEST, createObject);
//   yield takeLatest(types.LIST_BUILDING_OBJECTS_REQUEST, listBuildingObjects);
//   yield takeLatest(types.CREATE_BUILDING_OBJECT_SUCCESS, listBuildingObjects);
//   yield takeLatest(types.DELETE_MATERIAL_REQUEST, deleteFromMaterials);
//   yield takeLatest(types.UPDATE_MATERIAL_AMOUNT_REQUEST, updateMaterialAmount);
// }
//
// export default buildingSaga;
