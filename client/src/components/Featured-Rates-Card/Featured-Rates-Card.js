import React from 'react';
import {Link} from 'react-router-dom';

import PlanDetailsPop from '../Plan-Details-Pop/Plan-Details-Pop';

import './Featured-Rates-Card.css';

const FeaturedRatesCard = ({changePDP,setChangePDP, rate, ZipCode, watt}) =>{
   
    return(
        <div className='FRC'>
             {
                changePDP && <PlanDetailsPop setChangePDP={setChangePDP} rate={rate}/>
            }
            <div className='FRC-row-one'>
                <div className='FRC-id full-width'>
                    <span>{`${rate.brand} | #00${rate.offerID}`}</span>
                </div>
                <div className='FRC-name'>
                    <div>
                    <span className=''>{rate.offerName}</span>
                    </div>
                    
                </div>

            </div>
            <div className='FRC-row-two'>
                <div className='FRC-two-T'>
                    <div className='FRC-image'>
                        <img src={rate.image}/>
                    </div>
                    <div className='FRC-price'>
                        
                        <span>{Math.round(rate.offerRate_2000 * 100)}</span>
                        <span>&#162;</span>
                    </div>
                </div>
                <div className='FRC-two-B'>
                    <div className='FRC-id'>
                        <span>{`PUCT #${rate.puct}`}</span>
                    </div>
                    <div className='FRC-other-info'>
                        <div>
                        <span>{'Based on usage'}</span>
                        </div>
                        
                        <span>{'2000 kWh'}</span>
                    </div>
                    <div className='FRC-details-btn' onClick={() => setChangePDP(true)}>
                        <span>Plan Details</span>
                    </div>
                   
                </div>
                
            </div>
            <div className='FRC-row-three'>
                
                    <span>{rate.offerTagLine}</span>
                
               
            </div>
            {/* <div className='FRC-row-four'>
                <div className='FRC-bill-desc'>
                    <span>{`Based on ${2000} KWH`}</span>
                </div>
                <div className='FRC-bill-price'>
                
                    <span>{`${rate.rateData.Rate * 200}`}&#162;</span>
                   
                </div>
            </div> */}
            <div className='FRC-row-five'>
                <div className='FRC-length-label'>
                    <span>Term Length</span>
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
                        <span>{rate.phone}</span>
                    </div>
                </div>
            </div>
            <div className='FRC-row-seven'>
                <div className='FRC-seven-label'>
                    <span>POPULAR BILL CREDIT PLAN</span>
                </div>
            </div>
        </div>
    )
}


export default FeaturedRatesCard;