import React from 'react';

import OrderDetails from '../Order-Details/Order-Details';
import OrderDetailsTwo from '../Order-Details-Two/Order-Details-Two';

import './Registration-Right-Section.css';

const RegistrationRightSection = ({rate, provider}) =>{
    return(
        <div className='Rrs'>
            <OrderDetailsTwo/>
            <OrderDetails rate={rate} provider={provider}/>
            
        </div>
    )
}

export default RegistrationRightSection;