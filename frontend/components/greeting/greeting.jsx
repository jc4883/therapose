import React from 'react'
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className="login-signup-first">Sign in</Link>
      <Link to="/signup" className="login-signup-second">Sign up</Link>
    </nav>
  );

  return sessionLinks();
};


export default Greeting;
