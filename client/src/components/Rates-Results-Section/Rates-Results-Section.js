import React,{useState} from 'react';

import RatesResultsCard from '../Rates-Results-Card/Rates-Results-Card';
import MobileRatesCard from '../Mobile-Rates-Card/Mobile-Rates-Card';

import './Rates-Results-Section.css';



const images = [
    {
        img: require('../../images/pulse.png'),
        provider: 'Pulse'
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
    const [changePDP, setChangePDP] = useState(false);
    

    let list = []
    let temp;
    let image;
    
    resultData && resultData.forEach(prov =>{
        
            images.forEach(item =>{
                if(item.provider === prov.provider){
                    image = item.img;
                }
            })
            
            temp ={
                provider: prov.provider,
                rateData: prov.rateData,
                PUCT: prov.PUCT,
                Phone: prov.Phone,
                image: image
            }

            list = list.concat(temp);
            
    
        
    })

    const DATA = list;
    
   
    return(
        <div className='RRS'>
            <div className='desktop-rates'>
                {DATA && DATA.map(rate => <RatesResultsCard changePDP={changePDP} setChangePDP={setChangePDP} rate={rate} quickFilters={quickFilters} ZipCode={ZipCode}/>)}
            </div>
            <div className='mobile-rates'>
                {DATA && DATA.map(rate => <MobileRatesCard changePDP={changePDP} setChangePDP={setChangePDP} rate={rate} quickFilters={quickFilters} ZipCode={ZipCode}/>)}
            </div>
        </div>
    )
}

export default RatesResultsSection;