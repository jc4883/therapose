import React from 'react';
import NavBar from '../../nav_bar/nav_bar';
import RequestItem from './request_item/request_item';


class PatientIndex extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }

    componentDidMount() {
        let own_id = this.props.currentUser.id
        this.props.fetchRequests(own_id);
        this.timer = window.setInterval(() => {
            this.props.fetchRequests(own_id)
        }, 8000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    render() {
        if (!this.props.requests) {
            return null;
        }
        let requests = Object.values(this.props.requests);

        return (
            <>
                <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
                <div className="therapist-index">
                    <div className="row">
                        {requests.map((request) => {
                            return <RequestItem key={request.id} request={request}/>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default PatientIndex;

/*  GETTING ALL PATIENTS
<div className="container">
                    <div className="row">
                        {patients.map((patient) => {
                            return <IndexItem key={patient.id} person={patient}/>
                        })}
                    </div>
                </div>

*/