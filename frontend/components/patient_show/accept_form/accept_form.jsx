import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateRequest } from '../../../actions/request_actions';


class AcceptForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let callButton = document.getElementById("call-patient-button");
        let button = document.getElementById("accept-form-button");
        let form = document.querySelector(".patient-accept-form");
        let noteFrom = document.getElementById("note-from-patient");

        callButton.classList.add("show-boi");
        button.classList.add("enlarge-image");
        form.classList.add("hide");
        noteFrom.classList.add("delete");

        this.props.updateRequest(
            {
                id: this.props.request.id,
                patient_id: this.props.request.patient.id, 
                therapist_id: this.props.currentUser.id,
                description: this.props.request.description,
                done: "true"
            }
        );
    }

    render() {
        return (
            <form className="patient-accept-form" onSubmit={this.handleSubmit}>
                <label id="note-from-patient">
                    <h3>Note from {this.props.request.patient.username}</h3>
                    <section>
                        {this.props.request.description}
                    </section>
                </label>
                <button id="accept-form-button">Accept this patient</button>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateRequest: (request) => dispatch(updateRequest(request)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptForm);