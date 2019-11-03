import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown() {
    document.getElementById("avatar-dropdown").classList.toggle("show");
    //document.getElementById("triangle-boy").classList.toggle("show-triangle-boy")
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark d-flex">
          <a href="#" className="navbar-brand">
              <img className="d-inline-block align-top" width="30px" height="30px" src="https://github.com/jc4883/AnimationDemo/blob/master/src/assets/wall.png?raw=true"/>    
              Therapose
          </a>

          
          <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>    
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                  <li className="nav-item active">
                    <button className="nav-link" onClick={this.props.logout}>logout</button>
                  </li>
              </ul>
          </div>                    
      </nav>
    )
  }
}


export default NavBar;


