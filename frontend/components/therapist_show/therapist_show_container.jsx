import React from 'react';
import TherapistShow from './therapist_show';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createRequest, fetchRequests } from '../../actions/request_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        therapist: state.entities.therapists[ownProps.match.params.therapistId],
        requests: state.entities.requests,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({   
        logout: () => dispatch(logout()),
        createRequest: (request) => dispatch(createRequest(request)),
        fetchRequests: (user_id) => dispatch(fetchRequests(user_id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TherapistShow);