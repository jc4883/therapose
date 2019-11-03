import React from 'react';
import { login, validateUsername, clearErrors } from '../../actions/session_actions'
import LoginForm from './login_form'
import { connect } from 'react-redux';



const mapStateToProp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'login'
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(login(user)),
  })
}


export default connect(mapStateToProp, mapDispatchToProps)(LoginForm);
