// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as types from './../actions/actionTypes';
// import { getArticlesList, getArticleRead } from '../api/blog';
//
// function* getArticles(action) {
//     const query = {
//         category: action.data
//     };
//     const response = yield call(getArticlesList, query);
//     response.results.length
//         ? yield put({type: types.GET_ARTICLES_SUCCESS, response: response})
//         : yield put({type: types.GET_ARTICLES_FAILURE, response: response});
// }
//
// function* getArticle(action) {
//     const query = action.data;
//     const response = yield call(getArticleRead, query);
//     response
//         ? yield put({type: types.GET_ARTICLE_SUCCESS, response: response})
//         : yield put({type: types.GET_ARTICLE_FAILURE, response: response});
// }
//
// function* blogSaga() {
//     yield takeLatest(types.GET_ARTICLES_REQUEST, getArticles);
//     yield takeLatest(types.GET_ARTICLE_REQUEST, getArticle);
// }
//
// export default blogSaga
