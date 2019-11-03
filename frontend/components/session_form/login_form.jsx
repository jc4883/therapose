import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../util/session_api_util';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      phase: "not validated",
      toSplash: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.getIncorrectPasswordError = this.getIncorrectPasswordError.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
  }

  handleIcon() {
    this.setState({toSplash: true});
  }

  chooseAction() {
    return this.handleSubmit;
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({username: this.state.username, password: this.state.password});
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.processForm({username: "demologger", password: "abbieR0ad"})
  }

  getIncorrectPasswordError() {
    let incorrectPassMsg = "We didn\'t recognize that password."
    if (this.props.errors[0] === incorrectPassMsg) {
      return(
        <div>{incorrectPassMsg}</div> 
      ) 
    }
  }

  messagesExceptIncorrectPassword() {
    return this.props.errors.filter((err) => {
      return err !== "We didn\'t recognize that password."
    })
  }


  render() {
    if (this.state.toSplash) {
      return <Redirect to="/"/>
    }
    return (
      <div className="login-page">
        <img width="30px" height="30px" src={window.back_icon} onClick={this.handleIcon}/>    

        <section>
          <h2>Log in to Therapos</h2>
          <form className="login-form-therapose" onSubmit={this.handleSubmit}>
            <div>Username</div>
            <input autoComplete="off" autoFocus="autofocus" placeholder="e.g. julie24" 
                            id="username-input" type="text" value={this.state.username} 
                                                    onChange={this.update("username")}/>

            <div>Password</div>
            <input  type="text"  id="password-input" 
                              type="password" value={this.state.password} 
                                        onChange={this.update("password")}/>

            <button>Log in</button>
          </form>
          <h3>Don't have an account?</h3>  
          <Link className="sign-up-instead" to="/signup"> Sign up instead</Link>
        </section>
    </div>
    )
  }

}

export default LoginForm;