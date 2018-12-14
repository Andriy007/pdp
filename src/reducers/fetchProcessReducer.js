import * as types from './../actions/actionTypes';

const initialState = {
    isFetching: false
};

export default function fetchProcessReducer(state = initialState, action) {
    switch (action.type){
        case types.FETCH_REQUEST:
            return {
                isFetching: true
            };
        case types.FETCH_RECEIVE:
            return {
                isFetching: false
            };
        default:
            return state
    }
}