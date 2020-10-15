import React, {useState} from 'react';

import FeaturedRatesCard from '../Featured-Rates-Card/Featured-Rates-Card';


import './Featured-Rates-Section.css';

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


const FeaturedRatesSection = ({resultData, ZipCode, watt}) =>{


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
            image: image
        }

        list = list.concat(temp);
        
    })

    const DATA = list;

    return(
        <div className='FRS'>
            <div className='FRS-title'>
                <h2>Featured Plans</h2>
            </div>
            <div className='FRS-card-section'>
            {DATA && DATA.map((prov, index) =>{


                if(index < 4){
                    return(
                        
                            
                        <FeaturedRatesCard watt={watt} changePDP={changePDP} setChangePDP={setChangePDP} rate={prov} ZipCode={ZipCode}/>
                        
                    )
                }
            })}
            </div>
            
        </div>
    )
        
}
export default FeaturedRatesSection;