import React from 'react';

import OrderDetails from '../Order-Details/Order-Details';
import OrderDetailsTwo from '../Order-Details-Two/Order-Details-Two';

import './Registration-Right-Section.css';

// className={orderPop ? 'Rrs' : 'Rrs-close'}

const RegistrationRightSection = ({ orderPop, setChangePDP, rate, PUCT, provider, formData, mainFormIndex, setMainFormIndex, watt}) =>{
    return(
        <div className={'Rrs'}>
            {
                mainFormIndex >= 1 && <OrderDetailsTwo formData={formData} mainFormIndex={mainFormIndex} setMainFormIndex={setMainFormIndex}/>
            }
            
            <OrderDetails orderPop={orderPop} PUCT={PUCT} watt={watt} setChangePDP={setChangePDP} rate={rate} provider={provider}/>
            
        </div>
    )
}

export default RegistrationRightSection;