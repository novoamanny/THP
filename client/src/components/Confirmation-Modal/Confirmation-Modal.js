import React from 'react';

import './Confirmation-Modal.css';

const ConfirmationModal = ({confirmation}) =>{
    return(
        <div className='Confirmation-Modal'>
            <div className='backdrop'></div>
            <div className='confirm-modal-UI'>
                <div>
                    <h2>Confirmation #:</h2>
                    <span>{confirmation && confirmation.confirmation.ConfirmationNumber}</span>
                </div>
                <div>
                    <h2>Confirmation Status</h2>
                    <span>{confirmation && confirmation.confirmation.ConfirmationStatus}</span>
                </div>
                <div>
                    <h2>Confirmation Status</h2>
                    <span>{confirmation && confirmation.confirmation.ConfirmationStatus}</span>
                </div>
                <div>
                    <h2>Confirmation Status Message:</h2>
                    <span>{confirmation && confirmation.confirmation.ConfirmationStatusMessage}</span>
                </div>
                <div>
                    <h2>Deposit Amount</h2>
                    <span>{confirmation && confirmation.confirmation.DepositAmount}</span>
                </div>
                <div>
                    <h2>Deposit Payment</h2>
                    <span>{confirmation && confirmation.confirmation.DepositPayment}</span>
                </div>
            </div>
        </div>
    )
}


export default ConfirmationModal;