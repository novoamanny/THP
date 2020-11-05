import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postRegister} from '../../actions/register'
import Spinner from '../Spinner/Spinner';

const ConfirmationForm  = ({formData, postRegister, register:{confirmation, confirmationLoading}}) =>{
    console.log(formData)
    useEffect(() => {
        
        postRegister(formData);
        
      },[postRegister])
    return confirmationLoading && confirmation === null ? <div style={{width: '50%',display: 'flex', flexWrap: 'wrap', justifyContent: 'center',position: 'fixed', top: '35%'}}><Spinner/></div>  : (
        <div className='QFS'>
            <div className='qfs-question'>
                <h2>You have been Enrolled for Service!</h2>
            </div>
            <div className='qfs-label'>
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
    postRegister: PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
    register: state.register
});

export default connect(mapStateToProps, {postRegister})(ConfirmationForm);