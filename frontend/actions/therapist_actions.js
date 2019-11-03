import * as API_Therapist_Util from '../util/therapist_api_util';

export const RECEIVE_ALL_THERAPISTS = 'RECEIVE_ALL_THERAPISTS';


const receiveTherapists = (therapists) => {
    return ({
        type: RECEIVE_ALL_THERAPISTS,
        therapists
    })
}

export const fetchTherapists = (region, category) => {
  return dispatch => {
    return API_Therapist_Util.fetchTherapists(region, category).then(therapists => {
      return dispatch(receiveTherapists(therapists));
    })
  }
}


