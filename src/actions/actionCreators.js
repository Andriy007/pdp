import * as types from "./actionTypes";
import { userService } from "../api/user.service"

/******REGISTRATION******/

export const registration = (users) => ({type: types.REGISTER_REQUEST, users});

/******LOGIN******/
export const login = (user, pass) => ({type: types.LOGIN_REQUEST, payload: {username: user, password: pass}});

/*****LOGOUT*****/
export const logout = (user) => {
  userService.logout();
  return { type: types.LOGOUT, user };
};

export const clearError = () => ({type: types.CLEAR});

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

