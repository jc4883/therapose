import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions'
import { connect } from 'react-redux';
import SignupForm from './signup_form'

const mapStateToProp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'signup'
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProp, mapDispatchToProps)(SignupForm)

