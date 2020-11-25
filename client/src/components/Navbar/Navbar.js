import React, { useState } from 'react';

import './Navbar.css'

const Navbar = ({url,mobileSlide, setMobileSlide, orderPop, setOrderPop}) =>{
    
    
    return(
        <div className='Navbar'>
           
            <div className='nav-logo'>
                <a href='https://www.texashomepower.com/home/'><img src={require('../../images/THP-Logo-Main.png')}/></a>
            </div>
    {url.page && <div className='OD-Details-Button back' ><a href={`/${url.zipcode}`}>Back To Rates</a></div> }
            <div className='nav-b'>
            
                {
                    !url.page ? 
                    <div className='nav-button' onClick={() => setMobileSlide(!mobileSlide)}>
                        <span>Search Filters</span>
                    </div> 
                    : 
                    <div className='nav-b-order'>
                        
                    <div className='nav-button ' onClick={() => setOrderPop(!orderPop)}>
                        <span>{orderPop ? 'Close Details' :'Order Details'}</span>
                    </div>
                    </div>
                }
            </div>
            
        </div>
    )
}

export default Navbar;