export const fetchRequests = (user_id) => {
    return $.ajax({
        method: 'GET',
        url: 'api/requests',
        data: { user_id }
    })
}

export const createRequest = (request) => {
  return $.ajax({
    method: "POST",
    url: "api/requests",
    data: { request }
  })
}

export const deleteRequest = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/requests/${id}`
  })
}

export const updateRequest = (request) => {
  return $.ajax({
    method: "PATCH",
    url: `api/requests/${request.id}`,
    data: { request }
  })
}