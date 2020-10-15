import React from 'react';
import './Plan-Details-Pop.css';

const PlanDetailsPop = ({setChangePDP, rate}) =>{
    
    return(
        <div className='PDP'>
            <div className='PDP-backdrop' onClick={() => setChangePDP(false)}></div>
            <div className='PDP-UI'>
                <div className='PDP-label-one'>
                    <span>Plan Details</span>
                </div>
                <div className='PDP-sec-one'>
                
                    <div className='PDP-sec-one-one'>
                        <div className='PDP-PDF'>
                            <div className='PDF-btn'>
                                <i className="far fa-file-alt"></i>
                                <a target='_blank' href={rate && rate.rateData.EFLLink}>Facts Label</a>
                            </div>
                            <div className='PDF-btn'>
                                <i className="far fa-file-alt"></i>
                                <a target='_blank' href={rate && rate.rateData.TOSLink}>Terms of Service</a>
                            </div>
                            <div className='PDF-btn'>
                                <i className="far fa-file-alt"></i>
                                <a target='_blank' href={rate && rate.rateData.YRACLink}>YRAC</a>
                            </div>
                        </div>
                        <div className='PDP-ETF'>
                            <span>{`Early Termination Fee:  `}</span>
                        </div>
                        <div className='PDP-note'>
                            <span>{`(Note this fee will not be charged if you end your contract early because you are moving out.)`}</span>
                        </div>
                        <div className='PDP-RD'>
                            <span>{`Rate Description:`}</span>
                        </div>
                        <div className='PDP-desc'>
                            <span>{rate.rateData.Plan.PlanSubHeader}</span>
                        </div>
                    </div>
                    
                </div>
                <div className='PDP-label-one'>
                    <span>Pricing Details</span>
                </div>
                <div className='PDP-sec-two'>
                    <div className='PDP-row'>
                        <div className='PDP-col'>
                            <span>{`Monthly Usage`}</span>
                        </div>
                        <div className='PDP-col'>
                            <div className='PDP-col-col'>
                                <span>{`500 kwh`}</span>
                            </div>
                            <div className='PDP-col-col'>
                                <span>{`1000 kwh`}</span>
                            </div>
                            <div className='PDP-col-col'>
                                <span>{`2000 kwh`}</span>
                            </div>
                        </div>
                    </div>
                    <div className='PDP-row'>
                        <div className='PDP-col'>
                            <span>{`Estimated Monthly Bill`}</span>
                        </div>
                        <div className='PDP-col'>
                            <div className='PDP-col-col'>
                                <span>{`$${rate && rate.rateData.Rate * 500}`}</span>
                            </div>
                            <div className='PDP-col-col'>
                                <span>{`$${rate && rate.rateData.Rate * 1000}`}</span>
                            </div>
                            <div className='PDP-col-col'>
                                <span>{`$${rate && rate.rateData.Rate * 2000}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className='PDP-row'> 
                        <div className='PDP-col'>
                            <span>{`Average Price Per KWH (Total / Usage)`}</span>
                        </div>
                        <div className='PDP-col'>
                            <div className='PDP-col-col'>
                                <span>{`${rate && rate.rateData.Rate}`}</span>
                            </div>
                            <div className='PDP-col-col'>
                                <span>{`${rate && rate.rateData.Rate}`}</span>
                            </div>
                            <div className='PDP-col-col'>
                                <span>{`${rate && rate.rateData.Rate}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default PlanDetailsPop