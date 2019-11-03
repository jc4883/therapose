import { RECEIVE_ALL_THERAPISTS } from '../actions/therapist_actions';

const therapistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_THERAPISTS:
      return Object.assign({}, action.therapists );
    default:
      return state;
  }
}

export default therapistsReducer;
