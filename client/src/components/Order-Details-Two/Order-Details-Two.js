import React from 'react';

import './Order-Details-Two.css'

const OrderDetailsTwo = () =>{
    return(
        <div className='ODT'>
            <div className='ODT-Label'>
                <h2>Order Details</h2>
            </div>
            <div className='ODT-Details'>
                <div className='ODT-Details-Date'>
                    <div className='ODT-Details-L'>
                        <div>
                            <div>
                                <h2>Switch Type:</h2>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>Start Date:</h2>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='ODT-Details-R'>
                       <div>
                           <li>Edit</li>
                       </div>
                    </div>
                </div>
                <div className='ODT-Details-Address'>
                    <div className='ODT-Details-L'>
                        <div>
                            <div>
                                <h2>Service Address:</h2>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>ESIID:</h2>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className='ODT-Details-R'>
                        <div>
                           <li>Edit</li>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsTwo;