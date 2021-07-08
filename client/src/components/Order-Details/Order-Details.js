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

const OrderDetails = ({data, orderPop,rate,PUCT, provider, setChangePDP, watt}) =>{

    
  
    let temp;
    


    
    images.forEach(item =>{
        
        if(item.provider === data.brand){
            temp = item.img;
        }
        
    })

    const image = temp;

    // className={orderPop ? 'OD' : 'OD-close'}
   
    return(
        <div className='OD' className={'OD'}>
            <div className='OD-label'>
                <h2>Your Current Plan</h2>
            </div>
            <div className='OD-Details'>
                <div className='OD-Details-Top'>
                    <div className='OD-Details-Top-T'>
                        <div className='OD-Details-p'>
                            <span>{`${data.brand} | PUCT #${data.puct}`}</span>
                        </div>
                        <div className='OD-Details-p-two'>
                            <span>{data && data.offerName}</span>
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
                                <span>{data && Math.round(data.offerRate_2000 * 100)}</span>
                                <span>&#162;</span>
                            </div>
                            <div className='DTBR-three'>
                                <p>{`Based on usage`}</p>
                                <p>{`2000 kwh`}</p>
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
                            <p>Term Length</p>
                        </div>
                        <div className='OD-Details-Two-2'>
                            <h2>{data && data.offerLength}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Three'>
                        <div className='OD-Details-Three-1'>
                            <p>Rate Type</p>
                        </div>
                        <div className='OD-Details-Three-2'>
                            <h2>{data && data.offerType}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Four'>
                        <div className='OD-Details-Four-1'>
                            <p>Early Termination Fee</p>
                        </div>
                        <div className='OD-Details-Four-2'>
                            <h2>{`$${data && data.offerCancelFee}/month remaining in contract`}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Three'>
                        <div className='OD-Details-Three-1'>
                            <p>Company Name:</p>
                        </div>
                        <div className='OD-Details-Three-2'>
                            <h2>{data.brand}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Three'>
                        <div className='OD-Details-Three-1'>
                            <p>Hours of Operation</p>
                        </div>
                        <div className='OD-Details-Three-2'>
                            <h2>{data.hoursOfOperation}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Three'>
                        <div className='OD-Details-Three-1'>
                            <p>Customer Support</p>
                        </div>
                        <div className='OD-Details-Three-2'>
                            <h2>{data.phone}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Three'>
                        <div className='OD-Details-Three-1'>
                            <p>Customer Support</p>
                        </div>
                        <div className='OD-Details-Four-2'>
                            <h2>{data.emailAddress}</h2>
                        </div>
                    </div>
                    <div className='OD-Details-Five'>
                        <div className='PDF-btn-OD'>
                        <i className="far fa-file-alt"></i>
                            <a target='_blank' href={data.eflURL}>Facts Label</a>
                        </div>
                        <div className='PDF-btn-OD'>
                        <i className="far fa-file-alt"></i>
                            <a target='_blank' href={data.tosURL}>Terms of Service</a>
                        </div>
                        <div className='PDF-btn-OD'>
                        <i className="far fa-file-alt"></i>
                            <a target='_blank' href={data.yracURL}>YRAC</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default OrderDetails;