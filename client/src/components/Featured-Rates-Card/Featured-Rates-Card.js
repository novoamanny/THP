import React from 'react';
import {Link} from 'react-router-dom';

import './Featured-Rates-Card.css';

const FeaturedRatesCard = ({rate, ZipCode}) =>{
    return(
        <div className='FRC'>
            <div className='FRC-row-one'>
                <div className='FRC-id'>
                    <span>{`${rate.provider} | ${rate.rateData.RateID}`}</span>
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
                    <div className='FRC-details-btn'>
                        <span>Plan Details</span>
                    </div>
                    <div className='FRC-other-info'>
                        <span>2000 KWH</span>
                    </div>
                </div>
            </div>
            <div className='FRC-row-three'>
                
                    <span>{rate.rateData.Plan.PlanSubHeader}</span>
                
               
            </div>
            <div className='FRC-row-four'>
                <div className='FRC-bill-desc'>
                    <span>Estimated Montly Bill Based on 2000 KWH</span>
                </div>
                <div className='FRC-bill-price'>
                
                    <span>{rate.rateData.Rate * 500}</span>
                    <span>&#36;</span>
                </div>
            </div>
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
                    <Link  to={`/${ZipCode}/${rate.provider}/register/00${rate.rateData.RateID}`} className='FRC-Link'>Check Availability</Link>
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
            <div className='FRC-row-seven'>
                <div className='FRC-seven-label'>
                    <span>POPULAR BILL CREDIT PLAN</span>
                </div>
            </div>
        </div>
    )
}


export default FeaturedRatesCard;