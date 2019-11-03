import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Splash from './splash/splash';
import LogInForm from './session_form/login_form_container';
import SignUpForm from './session_form/signup_form_container';
import Index from './index/index_container';
import TherapistIndex from './index/therapist_index/therapist_index_container';
import PatientIndex from './index/patient_index/patient_index_container';
import RoleChooseForm from './index/role_choose_form';
import TherapistShow from './therapist_show/therapist_show_container';
import PatientShow from './patient_show/patient_show_container';
import VideoCall from './video_call/VideoCall';


const App = () => (
    <Switch>
      <AuthRoute exact path="/" component={Splash}/>
      <AuthRoute exact path="/login" component={LogInForm} />
      <AuthRoute exact path="/signup" component={SignUpForm} />
      <ProtectedRoute exact path="/index" component={Index}/>
      <ProtectedRoute exact path="/patient_index" component={PatientIndex} />
      <ProtectedRoute exact path="/therapist_index" component={TherapistIndex} />
      <ProtectedRoute exact path="/role_choose_form" component={RoleChooseForm} />
      <ProtectedRoute exact path="/therapist/:therapistId" component={TherapistShow} />
      <ProtectedRoute exact path="/patient/:requestId" component={PatientShow} />
      <ProtectedRoute exact path="/call" component={VideoCall} />
    </Switch>
);

export default App;