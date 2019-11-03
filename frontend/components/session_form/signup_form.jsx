import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      toSplash: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
  }

  handleIcon() {
    this.setState({toSplash: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      if (this.props.errors.length > 0) {
        this.props.clearErrors();
      }
      this.setState({[field]: e.target.value})
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
  }


  render() {
    if (this.state.toSplash) {
      return <Redirect to="/"/>
    }
    return (
      <div className="login-page">
        <img width="30px" height="30px" src={window.back_icon} onClick={this.handleIcon}/>
        <section>
          <h2>Sign up for Therapos</h2>
          <form className="login-form-therapose" onSubmit={this.handleSubmit}>
            <div id="signup-directions">Type your name &amp; a password to begin</div>
            <input id="new-username" autoComplete="off" autoFocus="autofocus" placeholder="Your name" type="text" value={this.state.username} onChange={this.update("username")} required/>
            <input autoComplete="off" placeholder="Your password" type="password"  value={this.state.password} onChange={this.update("password")} required/>
            <button>Next</button>
          </form>
          
          <h3>Already have an account?</h3>
          <Link className="sign-up-instead" to="/login"> Log In</Link>
        </section>
      </div>  
    )
  }
}


export default SessionForm;