import React from 'react';
import PatientShow from './patient_show';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { deleteRequest } from '../../actions/request_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        request: state.entities.requests[ownProps.match.params.requestId],
        patient: state.entities.requests[ownProps.match.params.requestId].patient,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        deleteRequest: (id) => dispatch(deleteRequest(id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientShow);
