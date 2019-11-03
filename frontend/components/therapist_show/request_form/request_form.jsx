import React from 'react'
import { Link } from 'react-router-dom';


class RequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: "" };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let button = document.getElementById("request-form-button");
        let form = document.getElementById("therapist-form");
        let whatAre = document.getElementById("what-are-your-symptoms");
        let callButton = document.getElementById("call-button");

        callButton.classList.add("show-boi");
        callButton.disabled = "true";
        callButton.backgroundColor = "indianred";
        callButton.innerHTML = "Waiting For Response..."


        whatAre.classList.add("delete");
        form.classList.add("hide");
        button.classList.add("enlarge-image");
        //show, hide classes defined in request_form.scss;
        this.props.createRequest(
            {description: this.state.value, therapist_id: this.props.therapist.id, patient_id: this.props.currentUser.id, user_id: this.props.currentUser.id, done: "false"}
        )
        
    }

    render() {
        return (
            <form id="therapist-form" className="therapist-request-form" onSubmit={this.handleSubmit}>
                <label id="what-are-your-symptoms">
                    <h3 >What are your symptoms?</h3>
                    <textarea placeholder={`Send a option description with your request to connect with ${this.props.therapist.username}`} type="text" value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <button id="request-form-button">Submit</button>
            </form>
        )
    }

}

export default RequestForm;