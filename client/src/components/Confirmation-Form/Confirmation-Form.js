import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const ConfirmationForm  = ({register:{confirmation}}) =>{
    
    return(
        <div className='CF'>
            <div className='CF-title'>
                <h2>You have been Enrolled for Service!</h2>
            </div>
            <div className='CF-label'>
                <h2>Enrollment Confirmation</h2>
            </div>
            <div className='CF-confirmation'>
                <div className='CF-c-one'>

                </div>
                <div className='CF-c-two'>

                </div>
                <div className='CF-c-three'>

                </div>
            </div>
        </div>
    )
}

ConfirmationForm.propTypes = {
    
    register: PropTypes.object.isRequired,
    
};

const mapStateToProps = state => ({
    register: state.register
});

export default connect(mapStateToProps, {})(ConfirmationForm);