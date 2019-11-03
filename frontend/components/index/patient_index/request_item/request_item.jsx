import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class RequestItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toShow: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({toShow: true});
    }

    render() {
        if (this.state.toShow) {
            return <Redirect to={`/patient/${this.props.request.id}`} />
        }
        return (
            <div onClick={this.handleClick} className="index_item">
                <h2>{this.props.request.patient.username}</h2>
                <h5>{this.props.request.description}</h5>
            </div>
        )
    }
}

export default RequestItem;