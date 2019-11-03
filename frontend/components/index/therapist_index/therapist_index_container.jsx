import React from 'react';
import TherapistIndex from './therapist_index';
import { connect } from 'react-redux';
import { fetchTherapists } from '../../../actions/therapist_actions';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        therapists: state.entities.therapists
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTherapists: (region, category) => dispatch(fetchTherapists(region, category)),
        logout: () => dispatch(logout())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TherapistIndex);