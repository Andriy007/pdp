import * as types from './../actions/actionTypes';

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
    case types.REGISTER_FAILURE:
      return initialState;

    default:
      return state
  }
}
