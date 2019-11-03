import React from 'react';
import Index from './index';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);