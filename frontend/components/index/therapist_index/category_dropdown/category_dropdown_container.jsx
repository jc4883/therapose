import React from 'react';
import CategoryDropdown from './category_dropdown';
import { connect } from 'react-redux';
import { fetchTherapists } from '../../../../actions/therapist_actions'; 

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
    })
} 

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTherapists: (category) => dispatch(fetchTherapists("New York", category))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDropdown);