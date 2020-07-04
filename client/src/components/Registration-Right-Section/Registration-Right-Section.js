import React from 'react';

import OrderDetails from '../Order-Details/Order-Details';

import './Registration-Right-Section.css';

const RegistrationRightSection = () =>{
    return(
        <div className='Rrs'>
            <div className='Rrs-top'>
                <OrderDetails/>
            </div>
            <div className='Rrs-bottom'>

            </div>
        </div>
    )
}

export default RegistrationRightSection;