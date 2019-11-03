import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { Redirect } from 'react-router-dom';
import AcceptForm from './accept_form/accept_form';

class PatientShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {call: false};
        this.handleCallButton = this.handleCallButton.bind(this);
    }


    handleCallButton() {
        let comp = document.querySelector(".patient-show");
        let about = document.querySelector(".patient-show > section");
        comp.classList.add("call-start");
        about.classList.add("call-start");
        window.setTimeout(() => {
            this.setState({call: true});
            this.props.deleteRequest(this.props.request.id);
        }, 2400);
    }

    render() {
        if (this.state.call === true) {
            return <Redirect to={`/call`} />
        }
        return (
            <>
                <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
                <div className="patient-show">
                    <header>
                        <div>
                            <div className="background-lights">
                                <div className="profile-photo"></div>
                            </div>
                            <section>
                                <section>
                                    <div>
                                        <h1>{this.props.patient.username}</h1>
                                        <h5>This request is about my {this.props.patient.category}</h5>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </header>
                    <section>
                        <h2>About Patient</h2>
                        <h5>{this.props.patient.description}</h5>
                    </section>
                    {/* request description instead of Request Form*/}
                    <AcceptForm request={this.props.request}/>
                    <button id="call-patient-button" onClick={this.handleCallButton}>Call</button>
                </div>
            </>
        )
    }
}

export default PatientShow;