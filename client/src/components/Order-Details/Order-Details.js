import React from 'react';

import './Order-Details.css';

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

const OrderDetails = ({rate,PUCT, provider, setChangePDP, watt}) =>{

    
  
    let temp;
    


    
    images.forEach(item =>{
        
        if(item.provider === provider){
            temp = item.img;
        }
        
    })

    const image = temp;
   
    return(
        <div className='OD'>
            <div className='OD-label'>
                <h2>Your Current Plan</h2>
            </div>
            <div className='OD-Details'>
                <div className='OD-Details-Top'>
                    <div className='OD-Details-Top-T'>
                        <div className='OD-Details-p'>
                            <span>{`${provider} | PUCT #${PUCT}`}</span>
                        </div>
                        <div className='OD-Details-p-two'>
                            <span>{rate && rate[0].Plan.PlanName}</span>
                        </div>
                    </div>
                    <div className='OD-Details-Top-B'>
                        <div className='OD-Details-Top-B-L'> 
                            <div className='OD-Details-Image'>
                                <img src={image}/>
                            </div>
                            <div className='OD-Details-Button' onClick={() => setChangePDP(true)}>
                                <span>Plan Details</span>
                            </div>
                        </div>
                        <div className='OD-Details-Top-B-R'>
                            <div className='DTBR-one'>
                                <p>Rate Per KWh</p>
                            </div>
                            <div className='DTBR-two'>
                                <span>{rate && rate[0].Rate * 100}</span>
                                <span>&#162;</span>
                            </div>
                            <div className='DTBR-three'>
                                <p>{`${watt} kwh`}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='OD-Details-Bottom'>
                    {/* <div className='OD-Details-One'>
                        <div className='OD-Details-One-1'>
                            <p>{`Estimated Monthly Bill Based on ${watt} KWh`}</p>
                        </div>
                        <div className='OD-Details-One-2'>
                            <h2>{rate && rate[0].Rate}</h2>
                        </div>
                    </div> */}
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
                            <p>Early Termination Fee</p>
                        </div>
                        <div className='OD-Details-Four-2'>
                            <h2>{`$${rate && rate[0].CancellationFeeAmount}/month remaining in contract`}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Five'>
                        <div className='PDF-btn-OD'>
                        <i className="far fa-file-alt"></i>
                            <a target='_blank' href={rate && rate[0].EFLLink}>Facts Label</a>
                        </div>
                        <div className='PDF-btn-OD'>
                        <i className="far fa-file-alt"></i>
                            <a target='_blank' href={rate && rate[0].TOSLink}>Terms of Service</a>
                        </div>
                        <div className='PDF-btn-OD'>
                        <i className="far fa-file-alt"></i>
                            <a target='_blank' href={rate && rate[0].YRACLink}>YRAC</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default OrderDetails;