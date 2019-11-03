import * as API_Patient_Util from '../util/patient_api_util';

export const RECEIVE_ALL_PATIENTS = 'RECEIVE_ALL_PATIENTS';



const receivePatients = (patients) => {
    return ({
        type: RECEIVE_ALL_PATIENTS,
        patients
    })
}


export const fetchPatients = (region, category) => dispatch => {
  return API_Patient_Util.fetchPatients(region, category).then(patients => {
    return dispatch(receivePatients(patients));
  })
}