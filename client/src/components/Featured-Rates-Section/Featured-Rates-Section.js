import React from 'react';

import FeaturedRatesCard from '../Featured-Rates-Card/Featured-Rates-Card';


import './Featured-Rates-Section.css';

const FeaturedRatesSection = ({resultData, ZipCode}) =>{
    return(
        <div className='FRS'>
            {resultData && resultData.map((prov, index) =>{
                if(index < 4){
                    return <FeaturedRatesCard rate={prov} ZipCode={ZipCode}/>
                }
            })}
        </div>
    )
        
}
export default FeaturedRatesSection;