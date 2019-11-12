import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { Redirect } from 'react-router-dom';
import RequestForm  from './request_form/request_form';


class TherapistShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {call: false};
        this.handleCallButton = this.handleCallButton.bind(this);
        // this.trackRequests = this.trackRequests.bind(this);
        this.timer = null;
    }

    // trackRequests() {
    //     this.timer = window.setInterval(() => {
    //         console.log("here");
    //         this.props.fetchRequests(this.props.currentUser.id)
    //     }, 8000);
    // }

    componentDidMount() {
        this.timer = window.setInterval(() => {
            let button = document.getElementById("call-button");
            let requests = Object.values(this.props.requests);
            for (let i = 0; i < requests.length; i++) {
                if (requests[i].done === "true") {
                    button.innerHTML = "Call";
                    button.style.backgroundColor = "mediumseagreen";
                    button.disabled = false;
                    break;
                }
            }
            this.props.fetchRequests(this.props.currentUser.id)
        }, 4000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    handleCallButton() {
        let comp = document.querySelector(".therapist-show");
        let about = document.querySelector(".therapist-show > section");
        comp.classList.add("call-start");
        about.classList.add("call-start");
        window.setTimeout(() => {
            this.setState({call: true});    
        }, 2400);   
    }

    render() {
        if (this.state.call === true) {
            return <Redirect to={`/call`} />
        }
        
        return (
            <>
                <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
                <div className="therapist-show">
                    <header>
                        <div>
                            <div className="background-lights">
                                <div className="profile-photo"></div>
                            </div>               
                            <section>
                                <section>
                                    <div>
                                        <h1>{this.props.therapist.username}</h1>
                                        <h5>Topics: {this.props.therapist.category}</h5>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </header>
                    <section>
                        <h2>About Me</h2>
                        <h5>{this.props.therapist.description}</h5>
                    </section>
                    <RequestForm therapist={this.props.therapist} currentUser={this.props.currentUser}  createRequest={this.props.createRequest} />
                    <button id="call-button" onClick={this.handleCallButton}>Call</button>
                </div>
            </>
        )
    }
}

export default TherapistShow;

/* 


*/