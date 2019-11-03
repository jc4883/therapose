import { RECEIVE_ALL_PATIENTS } from '../actions/patient_actions';

const patientsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PATIENTS:
      return Object.assign({}, action.patients );
    default:
      return state;
  }
}

export default patientsReducer;
