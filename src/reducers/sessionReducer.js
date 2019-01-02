import * as types from './../actions/actionTypes';

const initialState  = {
  initialized: false,
  sessionId: '',
  register: {
     hasErrorsWhileRegister: false
  }
};

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case types.INIT_SESSION_SUCCESS:
      return {
        ...state,
        initialized: true,
        sessionId: action.sessionId
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        sessionId: action.sessionId
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        login: false,
        sessionId: ''
      };
    case types.LOGIN_ERROR_CREDENTIALS:
      return {
        ...state,
        error: Symbol('true') // unique 'true'

      }
    case types.SIGNUP_SUCCESS:
       return {
         ...state,
         register: {
            hasErrorsWhileRegister: false
         }
       };
    case types.SIGNUP_FAILURE:
       return {
         ...state,
         register: {
            hasErrorsWhileRegister: action.response.data
         }
       };
    case types.SIGNUP_ERROR:
       return {
         ...state,
         register: {
            hasErrorsWhileRegister: true
         }
       };
    default:
      return state;
  }
}
