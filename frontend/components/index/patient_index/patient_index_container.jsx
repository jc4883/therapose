import React from 'react';
import PatientIndex from './patient_index';
import { connect } from 'react-redux';
import { fetchRequests } from '../../../actions/request_actions';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        requests: state.entities.requests,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        fetchRequests: (own_id) => dispatch(fetchRequests(own_id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientIndex);