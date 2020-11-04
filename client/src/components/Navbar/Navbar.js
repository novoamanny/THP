import React from 'react';

import './Navbar.css'

const Navbar = ({url,mobileSlide, setMobileSlide}) =>{
    
    return(
        <div className='Navbar'>
            <div className='nav-logo'>
                <a href='https://www.texashomepower.com/home/'><img src={require('../../images/THP-Logo-Main.png')}/></a>
            </div>
            <div className='nav-b'>
                {
                    !url.page ? 
                    <div className='nav-button' onClick={() => setMobileSlide(!mobileSlide)}>
                        <span>Search Filters</span>
                    </div> 
                    : 
                    <div className='nav-b-order'>
                    <div className='nav-button '>
                        <span>Order Details</span>
                    </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar;