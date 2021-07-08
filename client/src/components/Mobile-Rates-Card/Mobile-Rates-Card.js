import React,{useState} from 'react';

import {Link} from 'react-router-dom';

import PlanDetailsPop from '../Plan-Details-Pop/Plan-Details-Pop';

import './Mobile-Rates-Card.css';


const MobileRatesCard = ({changePDP,setChangePDP, rate, ZipCode, watt}) =>{
    const tempPrice = rate.offerRate_2000 * 100
    
    const price = Math.round(tempPrice);
    return(
        <div className='MRC'>
            {
                changePDP && <PlanDetailsPop setChangePDP={setChangePDP} rate={rate}/>
            }
            <div className='FRC-row-one'>
                <div className='FRC-id'>
                    <span>{`${rate.brand} | #00${rate.offerID}`}</span>
                </div>
                <div className='FRC-name'>
                    <div>
                    <span>{rate.offerName}</span>
                    </div>
                    
                </div>

            </div>
            <div className='FRC-row-two'>
                <div className='FRC-two-T'>
                    <div className='FRC-image'>
                        <img src={rate.image}/>
                    </div>
                   
                    <div className='FRC-price'>
                        
                        <span>{price}</span>
                        <span>&#162;</span>
                    </div>
                </div>
                <div className='FRC-two-B'>
                    <div className='FRC-id'>
                       
                        <span>{`PUCT #${rate.puct}`}</span>
                    </div>
                    <div className='FRC-details-btn' onClick={() => setChangePDP(true)}>
                        <span>Plan Details</span>
                    </div>
                    <div className='FRC-other-info'>
                        <span>2000 KWH</span>
                    </div>
                </div>
            </div>
            <div className='FRC-row-three'>
                
                    <span>{rate.offerTagLine}</span>
                
               
            </div>
            <div className='FRC-row-four'>
                <div className='FRC-bill-desc'>
                    <span>Estimated Montly Bill Based on 2000 KWH</span>
                </div>
                <div className='FRC-bill-price'>
                
                    <span>{price}</span>
                    <span>&#36;</span>
                </div>
            </div>
            <div className='FRC-row-five'>
                <div className='FRC-length-label'>
                    <span>Contract Length</span>
                </div>
                <div className='FRC-length'>
                    <span>{`${rate.offerLength} Months`}</span>
                </div>
            </div>
            <div className='FRC-row-six'>
                <div className='FRC-link'>
                    <Link  to={`/${ZipCode}/${rate.brand}/enrollment/${rate.puct}/00${rate.offerID}/${watt}/${rate.campaignCode === '' ? 'Pulse Power' : rate.campaignCode}`} className='FRC-Link'>Check Availability</Link>
                </div>
                <div className='FRC-link-details'>
                    <div className='FRC-link-details-one'>
                        <span>- OR CALL -</span>
                    </div>
                    <div className='FRC-link-details-two'>
                        <span>800-123-1234</span>
                    </div>
                </div>
            </div>
           
        </div>
    )
}


export default MobileRatesCard