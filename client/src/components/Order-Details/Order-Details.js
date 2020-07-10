import React from 'react';

import './Order-Details.css';

const OrderDetails = ({rate, provider}) =>{
   
    return(
        <div className='OD'>
            <div className='OD-label'>
                <h2>Your Current Plan</h2>
            </div>
            <div className='OD-Details'>
                <div className='OD-Details-Top'>
                    <div className='OD-Details-Top-T'>
                        <div>
                            <p>{`${provider} | ${rate && rate[0].RateID}`}</p>
                        </div>
                        <div>
                            <p>{rate && rate[0].Plan.PlanName}</p>
                        </div>
                    </div>
                    <div className='OD-Details-Top-B'>
                        <div className='OD-Details-Top-B-L'> 
                            <div className='OD-Details-Image'>

                            </div>
                            <div className='OD-Details-Button'>
                                <li>Plan Details</li>
                            </div>
                        </div>
                        <div className='OD-Details-Top-B-R'>
                            <div>
                                <p>Rate Per KWh</p>
                            </div>
                            <div>
                                <h2>{rate && rate[0].Rate}</h2>
                            </div>
                            <div>
                                <p>[$230.51 / 2000KWh]</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='OD-Details-Bottom'>
                    <div className='OD-Details-One'>
                        <div className='OD-Details-One-1'>
                            <p>Estimated Monthly Bill Based on 2000KWh</p>
                        </div>
                        <div className='OD-Details-One-2'>
                            <h2>{rate && rate[0].Rate}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Two'>
                        <div className='OD-Details-Two-1'>
                            <p>Contract Length</p>
                        </div>
                        <div className='OD-Details-Two-2'>
                            <h2>{rate && rate[0].Term}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Three'>
                        <div className='OD-Details-Three-1'>
                            <p>Rate Type</p>
                        </div>
                        <div className='OD-Details-Three-2'>
                            <h2>{rate && rate[0].Plan.PlanType}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Four'>
                        <div className='OD-Details-Four-1'>
                            <p>Contract Fee</p>
                        </div>
                        <div className='OD-Details-Four-2'>
                            <h2>{rate && rate[0].CancellationFeeAmount}</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default OrderDetails;