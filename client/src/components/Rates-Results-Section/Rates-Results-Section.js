import React from 'react';

import RatesResultsCard from '../Rates-Results-Card/Rates-Results-Card';

import './Rates-Results-Section.css';


const images = [
    {
        img: require('../../images/pulse.png'),
        provider: 'pulse'
    },
    {
        img: require('../../images/energy-to-go-rgb-logo.png'),
        provider: 'etg'
    },
    {
        img: require('../../images/lone-star-energy-rgb-logo.png'),
        provider: 'lonestar'
    },
    {
        img: require('../../images/new-power-texas-rgb-logo.png'),
        provider: 'newpower'
    },
    {
        img: require('../../images/power-next-rgb-logo.png'),
        provider: 'powernext'
    },
    
    
    
   
    
]


const RatesResultsSection = ({resultData, quickFilters, ZipCode}) =>{
    

    let list = []
    let temp;
    let image;
    console.log(resultData)
    resultData && resultData.forEach(prov =>{
        
            images.forEach(item =>{
                if(item.provider === prov.provider){
                    image = item.img;
                }
            })
            
            temp ={
                provider: prov.provider,
                rateData: prov.rateData,
                image: image
            }

            list = list.concat(temp);
            
    
        
    })

    const DATA = list;
    
   
    return(
        <div className='RRS'>
           {DATA && DATA.map(rate => <RatesResultsCard rate={rate} quickFilters={quickFilters} ZipCode={ZipCode}/>)}
        </div>
    )
}

export default RatesResultsSection;