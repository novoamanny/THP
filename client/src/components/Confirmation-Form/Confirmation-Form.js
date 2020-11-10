import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postRegister} from '../../actions/register'
import Spinner from '../Spinner/Spinner';


import './Confirmation-Form.css';

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
            <div className='qfs-layout'>
                {/* <div className='qfs-text'>
                    <h2>{`Texas Home Power Order Number: ${confirmation.ConfirmationNumber}`}</h2>
                </div> */}
                <div className='qfs-text blue-text'>
                    <h2>{`Your Enrollment with ${formData.Provider} has been completed`}</h2>
                </div>
                <div className='qfs-text blue-text'>
                    <h2>{`Order Status: ${confirmation.ConfirmationStatus}`}</h2>
                </div>
                <div className='qfs-text blue-text'>
                    <h2>{`${formData.Provider} Confirmation Number: ${confirmation.ConfirmationNumber}`}</h2>
                </div>
                <div className='qfs-text red-text'>
                    <h2>{`You Should Receive A Confirmation Email Shortly, Thank You!`}</h2>
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