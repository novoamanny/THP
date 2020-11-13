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
                <div className='FRC-id'>
                    <span>{`${rate.provider} | #00${rate.rateData.RateID}`}</span>
                </div>
                <div className='FRC-name'>
                    <div>
                    <span className=''>{rate.rateData.Plan.PlanName}</span>
                    </div>
                    
                </div>

            </div>
            <div className='FRC-row-two'>
                <div className='FRC-two-T'>
                    <div className='FRC-image'>
                        <img src={rate.image}/>
                    </div>
                    <div className='FRC-price'>
                        
                        <span>{rate.rateData.Rate * 100}</span>
                        <span>&#162;</span>
                    </div>
                </div>
                <div className='FRC-two-B'>
                    <div className='FRC-id'>
                        <span>{`PUCT #${rate.PUCT}`}</span>
                    </div>
                    <div className='FRC-details-btn' onClick={() => setChangePDP(true)}>
                        <span>Plan Details</span>
                    </div>
                    <div className='FRC-other-info'>
                        {/* <span>2000 KWH</span> */}
                    </div>
                </div>
            </div>
            <div className='FRC-row-three'>
                
                    <span>{rate.rateData.Plan.PlanSubHeader}</span>
                
               
            </div>
            {/* <div className='FRC-row-four'>
                <div className='FRC-bill-desc'>
                    <span>{`Estimated Montly Bill Based on ${watt} KWH`}</span>
                </div>
                <div className='FRC-bill-price'>
                
                    <span>{`$${rate.rateData.Rate * 500}`}</span>
                   
                </div>
            </div> */}
            <div className='FRC-row-five'>
                <div className='FRC-length-label'>
                    <span>Contract Length</span>
                </div>
                <div className='FRC-length'>
                    <span>{`${rate.rateData.Term} Months`}</span>
                </div>
            </div>
            <div className='FRC-row-six'>
                <div className='FRC-link'>
                    <Link  to={`/${ZipCode}/${rate.provider}/enrollment/${rate.PUCT}/00${rate.rateData.RateID}/${watt}`} className='FRC-Link'>Check Availability</Link>
                </div>
                <div className='FRC-link-details'>
                    <div className='FRC-link-details-one'>
                        <span>- OR CALL -</span>
                    </div>
                    <div className='FRC-link-details-two'>
                        <span>{rate.Phone}</span>
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