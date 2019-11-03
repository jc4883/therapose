import { RECEIVE_ALL_REQUESTS, RECEIVE_REQUEST, REMOVE_REQUEST }  from '../actions/request_actions';

const requestsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_REQUESTS:
            return Object.assign({}, action.requests);
        case RECEIVE_REQUEST:
            // debugger
            return Object.assign({}, state, {[action.request.id] : action.request});
        case REMOVE_REQUEST:
            let newState = Object.assign({}, state);
            delete newState[action.requestId];
            return newState;
        default:
            return state
  }

}

export default requestsReducer;