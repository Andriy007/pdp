import * as types from './../actions/actionTypes';

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        users: [...state.users, action.users],
      };
    case types.REGISTER_SUCCESS:
      return state;

    case types.REGISTER_FAILURE:
      return state;

    default:
      return state
  }
}
