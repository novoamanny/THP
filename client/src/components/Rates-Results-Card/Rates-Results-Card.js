import React from 'react';

import {Link} from 'react-router-dom';

import './Rates-Results-Card.css';





const RatesResultsCard = ({rate, quickFilters, ZipCode}) =>{
    console.log(rate)
    return(
        <div className='RSC'>
           <div className='RSC-Top'>
               <div className='RSC-Top-Left'>
                    <div className='RSC-Top-Left-One'>
                        <img src={rate.image}/>
                    </div>
                    <div className='RSC-Top-Left-Two'>
                        <div className='tlto'>
                            <span>{`${rate.provider} | ${rate.rateData.RateID}`}</span>
                        </div>
                        <div className='tltt'>
                            <span>{rate && rate.rateData.Plan.PlanName}</span>
                        </div>
                        
                    </div>
                    <div className='RSC-Top-Left-Three'>
                        <div>
                        <span>Plan Details</span>
                        </div>
                        
                    </div>
               </div>
               <div className='RSC-Top-Right'>
                    <div className='RSC-Top-Right-One'>
                        <div className='RSC-Top-Right-One-T'>
                            <span>{ rate && rate.rateData.Rate * quickFilters}</span>
                        </div>
                        <div className='RSC-Top-Right-One-B'>
                            <span>{`Estimated Montly Bill on ${quickFilters}KWh`}</span>
                        </div>
                    </div>
                     <div className='RSC-Top-Right-Two'>
                        <div className='RSC-Top-Right-Two-T'>
                            <span>{`${rate && rate.rateData.Term} Months`}</span>
                        </div>
                        <div className='RSC-Top-Right-Two-B'>
                            <span>Contract Details</span>
                        </div>
                        </div>
                     <div className='RSC-Top-Right-Three'>
                        <div className='RSC-Top-Right-Three-T'>
                            <span>{`${rate && rate.rateData.Rate * 100}`}</span>
                        </div>
                        <div className='RSC-Top-Right-Three-B'>
                            <span>Rate Per KWh</span>
                        </div>
                    </div>
               </div>
            
           </div>
           <div className='RSC-Bottom'>
                <div className='RSC-Bot-Left'>
                    <div className='RSC-Bot-Left-One'>
                        <span>{ rate && rate.rateData.Plan.PlanSubHeader}</span>
                    </div>

                </div>
                <div className='RSC-Bot-Right'>
                    <div className='RSC-Bot-Right-T'>
                            <Link to={`/${ZipCode}/${rate && rate.provider}/register/00${rate && rate.rateData.RateID}`} className='RSC-Link'>Check Availability</Link>
                                
                    </div>
                    <div className='RSC-Bot-Right-B'>
                        <div>
                            <span>- or call -</span>
                        </div>
                        <div>
                            <span>888-123-1234</span>
                        </div>
                    </div>
                
               </div>
           </div>
        </div>
    )
}

export default RatesResultsCard;