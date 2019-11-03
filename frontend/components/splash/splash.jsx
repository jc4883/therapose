import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../greeting/greeting'
import { Redirect } from 'react-router-dom';
class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {signup: false, login: false};
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleSignup() {
    this.setState({signup: true});
  }

  handleLogin() {
    this.setState({login: true})
  }

  render() {
    if (this.state.signup) {
      return <Redirect to="/signup"/>
    } else if (this.state.login) {
      return <Redirect to="/login"/>
    } else {
      return (
        <nav className="splash-page" >
          <header>
            <div className="logo">
              <h1>Therapose</h1>
            </div>
            <Greeting/>
          </header>
          <img src={window.bonsai_background}/>
          <div className="root-page-text" >
            <h1>
              We're glad you could make it.
                    <br />
              Stay as long as you need
            </h1>

            <p>
                <strong>Does life feel scattered?</strong>&nbsp; Is it like a tornado of occurances 
              impossible to control <br />with no ending that's clearly tangible?&nbsp;<strong>Try Therapose:</strong> Your head clears,
              your breathing slows, <br />and life seems to make more sense.
            </p>
            <button onClick={this.handleSignup}>Give Therapos a Try</button>
          </div>
          
        </nav>
      )
    }
  }
}


export default Splash;