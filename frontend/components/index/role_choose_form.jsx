import React from 'react';
import { Link } from 'react-router-dom';
const RoleChooseForm = ({ currentUser }) => {
    return (
        <>
            <div className="container role-choose-form">
                <nav className="navbar navbar-dark bg-dark d-flex">
                    <a href="#" className="navbar-brand mx-auto">
                        <img className="d-inline-block align-top" width="30px" height="30px" src="https://github.com/jc4883/AnimationDemo/blob/master/src/assets/wall.png?raw=true"/>    
                        Therapos
                    </a>            
                </nav>

                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Therapos!</h1>
                    <p className="lead">Are you a therapist or a patient?</p>
                </div>
                <div id="row" className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="card mb-4">
                            <img className="card-img-top" src={window.doctor}/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Therapist</h5>
                                <p className="card-text">We're here to find where you'll be most effective.</p>
                                <Link className="btn btn-primary" to="/patient_index">Continue</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="card mb-4">
                            <img className="card-img-top" src={window.patient}/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Patient</h5>
                                <p className="card-text">Thanks for coming! Let's get you the care you need.</p>
                                <Link className="btn btn-primary" to="/therapist_index">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RoleChooseForm