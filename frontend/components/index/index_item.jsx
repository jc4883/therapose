import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { toShow: false };
  } 

  handleClick() {
    this.setState({toShow: true});
  }

  render() {
    if (this.state.toShow){
      if (this.props.person.role === "therapist") {
        return <Redirect to={`/therapist/${this.props.person.id}`} />
      } else {
        //change this when patient show is implemented
        return <Redirect to={`/patient/${this.props.person.id}`} />        
      }
    } 
    let price;
    if (this.props.person.role === "therapist") {
      price = `$${this.props.person.price} / 30 minutes`;
    } else {
      price = null;
    }
    return (
        <div className="index_item" onClick={this.handleClick}>
          <h2>{this.props.person.username}</h2>
          <h5>"{this.props.person.description}"</h5>
        </div>
    )
  }
}


export default IndexItem;