import React from 'react';
import RoleChooseForm from './role_choose_form';
import TherapistIndex from './therapist_index/therapist_index';
import PatientIndex from './patient_index/patient_index';
import { Redirect } from 'react-router-dom'


class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        if (this.props.currentUser.role === "therapist") {
            return (
                <Redirect to="/patient_index"/>
            )
        } else if(this.props.currentUser.role === "patient") {
            return (
                <Redirect to="/therapist_index" />
            )
        } else {
            return (
                <Redirect to="/role_choose_form" />
            )
        }
    }
}

export default Index;