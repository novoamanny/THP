import React from 'react';

import {Link} from 'react-router-dom';

import PlanDetailsPop from '../Plan-Details-Pop/Plan-Details-Pop';

import './Rates-Results-Card.css';





const RatesResultsCard = ({changePDP,setChangePDP,rate, quickFilters, ZipCode}) =>{

    return(
        <div className='RSC'>
            {
                changePDP && <PlanDetailsPop setChangePDP={setChangePDP} rate={rate}/>
            }
           <div className='RSC-Top'>
               <div className='RSC-Top-Left'>
                    <div className='RSC-Top-Left-One'>
                        <img src={rate.image}/>
                        <div className='tlto tlto-PUCT'>
                            <span>{`PUCT #${rate.puct}`}</span>
                        </div>
                    </div>
                    <div className='RSC-Top-Left-Two'>
                        <div className='tlto'>
                            <span>{`${rate.brand} | #00${rate.offerID}`}</span>
                        </div>
                        <div className='tltt'>
                            <span>{rate && rate.offerName}</span>
                        </div>
                        <div className='RSC-Top-Left-Three' onClick={() => setChangePDP(true)}>
                        <div>
                        <span>Plan Details</span>
                        </div>
                        
                    </div>
                        
                    </div>
                   
               </div>
               <div className='RSC-Top-Right'>
                    {/* <div className='RSC-Top-Right-One'>
                        <div className='RSC-Top-Right-One-T'>
                            <span>&#36;</span>
                            <span>{ `${rate && rate.rateData.Rate * quickFilters}`}</span>
                        </div>
                        <div className='RSC-Top-Right-One-B'>
                            <span>{`Estimated Montly Bill on ${quickFilters}KWh`}</span>
                        </div>
                        <div className='RSC-Top-Right-One-B'>
                            <span>{`(${rate && rate.rateData.Rate} X ${quickFilters} KWH)`}</span>
                        </div>
                    </div> */}
                     <div className='RSC-Top-Right-Two'>
                        <div className='RSC-Top-Right-Two-T'>
                            <span>{`${rate && rate.offerLength} Months`}</span>
                        </div>
                        <div className='RSC-Top-Right-Two-B'>
                            <span>Term Length</span>
                        </div>
                        </div>
                     <div className='RSC-Top-Right-Three'>
                        <div className='RSC-Top-Right-Three-T'>
                            <span>{`${Math.round(rate.offerRate_2000 * 100)}`}</span>
                            <span>&#162;</span>
                        </div>
                        <div className='RSC-Top-Right-Three-B'>
                            <span>Rate Per KWh</span>
                        </div>
                        <div className='RSC-Top-Right-Three-B'>
                            <span>Based on 2000kW usage</span>
                        </div>
                    </div>
               </div>
            
           </div>
           <div className='RSC-Bottom'>
                <div className='RSC-Bot-Left'>
                    <div className='RSC-Bot-Left-One'>
                        <span>{ rate && rate.offerTagLine}</span>
                    </div>

                </div>
                <div className='RSC-Bot-Right'>
                    <div className='RSC-Bot-Right-T'>
                            <Link to={`/${ZipCode}/${rate && rate.brand}/enrollment/${rate.puct}/00${rate && rate.offerID}/${quickFilters}/${rate.campaignCode === '' ? 'Pulse Power' : rate.campaignCode}`} className='RSC-Link'>Check Availability</Link>
                                
                    </div>
                    <div className='RSC-Bot-Right-B'>
                        <div className='RSC-bot-call'>
                            <span>- OR CALL -</span>
                        </div>
                        <div className='RSC-bot-num'>
                            <span>{rate.phone}</span>
                        </div>
                    </div>
                
               </div>
           </div>
        </div>
    )
}

export default RatesResultsCard;