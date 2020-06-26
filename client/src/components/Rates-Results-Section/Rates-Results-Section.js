import React from 'react';

import RatesResultsCard from '../Rates-Results-Card/Rates-Results-Card';


const RatesResultsSection = ({rates}) =>{
    return(
        <div className='RRS'>
            {rates && rates.map(rate => {
                return <RatesResultsCard rate={rate}/>
           })}
        </div>
    )
}

export default RatesResultsSection;