import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import therapistsReducer from './therapists_reducer';
import patientsReducer from './patients_reducer';
import requestsReducer from './requests_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  therapists: therapistsReducer,
  patients: patientsReducer,
  requests: requestsReducer,
});

export default entitiesReducer;
