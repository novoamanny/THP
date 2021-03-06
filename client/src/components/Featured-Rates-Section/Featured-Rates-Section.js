import React, {useState} from 'react';

import FeaturedRatesCard from '../Featured-Rates-Card/Featured-Rates-Card';


import './Featured-Rates-Section.css';

const images = [
    {
        img: require('../../images/pulse.png'),
        provider: 'Pulse'
    },
]


const FeaturedRatesSection = ({resultData, ZipCode, watt}) =>{


    const [changePDP, setChangePDP] = useState(false);

    let list = []
    let temp;
    let image;


    
    resultData && resultData.forEach(prov =>{
        
        images.forEach(item =>{
            if(item.provider === prov.brand){
                image = item.img;
            }
        })
        
        temp ={
            ...prov,
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