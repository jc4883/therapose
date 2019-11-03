import * as API_Request_Util from '../util/request_api_util';

export const RECEIVE_ALL_REQUESTS = 'RECEIVE_ALL_REQUESTS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';

const receiveRequests = (requests) => {
  return ({
    type: RECEIVE_ALL_REQUESTS,
    requests,
  })
}

const receiveRequest = (request) => {
  return ({
    type: RECEIVE_REQUEST,
    request,
  })
}

const removeRequest = (id) => {
  return ({
    type: REMOVE_REQUEST,
    requestId: id,
  })
}

export const fetchRequests = (user_id) => dispatch => {
  return API_Request_Util.fetchRequests(user_id).then(requests => {
    return dispatch(receiveRequests(requests));
  })
}


export const createRequest = (request) => dispatch => {
  return API_Request_Util.createRequest(request).then(request => {
    return dispatch(receiveRequest(request))
  });
}

export const deleteRequest = (id) => dispatch => {
  return API_Request_Util.deleteRequest(id).then(request => {
    return dispatch(removeRequest(request.id))
  })
}
 
export const updateRequest = (request) => dispatch => {
  return API_Request_Util.updateRequest(request).then(request => {
    return dispatch(receiveRequest(request))
  })
}
