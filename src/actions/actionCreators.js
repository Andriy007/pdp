import * as types from './actionTypes';

/******** FETCHING CONTROL ********/
export const fetchRequest = () => ({type: types.FETCH_REQUEST});
export const fetchReceive = () => ({type: types.FETCH_RECEIVE});


/******** MODAL ********/
// export const showModal = (type, props) => ({
//   type: types.SHOW_MODAL,
//   payload: {
//     type,
//     props
//   }
// });
//
// export const hideModal = () => ({
//   type: types.HIDE_MODAL
// });
//


/******REGISTRATION******/

export const registration = (users) => ({type: types.REGISTER_REQUEST, users});

/******REGISTRATION******/
export const login = (user, pass) => ({type: types.LOGIN_REQUEST, payload: {username: user, password: pass}});

/*********GROUP CONTROL********/
export const addGroup = (group) => {
  return {
    type: types.ADD_GROUP,
    group
  }
};

export const deleteGroup = (id) => {
  return {
    type: types.DELETE_GROUP,
    id: id,
  }
};

