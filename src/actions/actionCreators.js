import * as types from './actionTypes';

/******** INIT SESSION ********/
export const initSession = () => ({type: types.INIT_SESSION_REQUEST});

/******** FETCHING CONTROL ********/
export const fetchRequest = () => ({type: types.FETCH_REQUEST});
export const fetchReceive = () => ({type: types.FETCH_RECEIVE});


/******** AUTH ********/
export const authorize = (credentials) => ({type: types.LOGIN_REQUEST, credentials});
export const logout = (token) => ({type: types.LOGOUT, token});
export const signup = (userDetails) => ({ type: types.SIGNUP, userDetails });

/******** MODAL ********/
export const showModal = (type, props) => ({
  type: types.SHOW_MODAL,
  payload: {
    type,
    props
  }
});

export const hideModal = () => ({
  type: types.HIDE_MODAL
});


export const addArticle = (article) => {
  return {
    type: types.ADD_ARTICLE,
    article
  }
};

export const deleteArticle = (id) => {
  return {
    type: types.DELETE_ARTICLE,
    id: id,
  }
};

