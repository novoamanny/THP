import React from 'react';

import OrderDetails from '../Order-Details/Order-Details';
import OrderDetailsTwo from '../Order-Details-Two/Order-Details-Two';

import './Registration-Right-Section.css';

const RegistrationRightSection = ({rate, provider, formData, mainFormIndex, setMainFormIndex}) =>{
    return(
        <div className='Rrs'>
            {
                mainFormIndex >= 1 && <OrderDetailsTwo formData={formData} mainFormIndex={mainFormIndex} setMainFormIndex={setMainFormIndex}/>
            }
            
            <OrderDetails rate={rate} provider={provider}/>
            
        </div>
    )
}

export default RegistrationRightSection;