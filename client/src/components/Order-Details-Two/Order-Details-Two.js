import React from 'react';

import './Order-Details-Two.css'

const OrderDetailsTwo = ({formData, mainFormIndex, setMainFormIndex}) =>{
    return(
        <div className='ODT'>
            <div className='ODT-Label'>
                <h2>Order Details</h2>
            </div>
            <div className='ODT-Details'>
                {
                    mainFormIndex === 2 && (
                        <div className='ODT-Details-Date'>
                            <div className='ODT-Details-L'>
                                <div>
                                    <div className='Details-ST-label'>
                                        <h2>Switch Type:</h2>
                                    </div>
                                    <div className='ODT-Details-ST'>

                                    </div>
                                </div>
                                <div>
                                    <div className='Details-SD-label'>
                                        <h2>Start Date:</h2>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='ODT-Details-R'>
                            <div className='ODT-Details-R-BTN'> 
                                <button onClick={() => setMainFormIndex(1)}>Edit</button>
                            </div>
                            </div>
                        </div>
                    )
                }
                <div className='ODT-Details-Address'>
                    <div className='ODT-Details-L'>
                        <div>
                            <div className='Details-SA-label'>
                                <h2>Service Address:</h2>
                            </div>
                            <div className='ODT-Details-Address1'>
                                <span>{formData.Address1}</span>
                            </div>
                            <div className='ODT-Details-City'>
                                <span>{`${formData.City}, ${formData.State} ${formData.ZipCode}`}</span>
                            </div>
                        </div>
                        <div>
                            <div className='Details-Esiid-label'>
                                <h2>ESIID:</h2>
                            </div>
                            <div className='Details-Esiid'>
                                <span>{formData.Esiid}</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='ODT-Details-R'>
                        <div className='ODT-Details-R-BTN'>
                           <button onClick={() => setMainFormIndex(0)}>Edit</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsTwo;