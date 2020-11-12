import React, { useState } from 'react';
import ChangeZipPop from '../Change-ZipCode-Modal/Change-ZipCode-Modal';
import './Navbar.css'

const Navbar = ({url,mobileSlide, setMobileSlide}) =>{
    const [navPop, setNavPop] = useState(false);
    
    return(
        <div className='Navbar'>
           {navPop && <ChangeZipPop/>} 
            <div className='nav-logo'>
                <a href='https://www.texashomepower.com/home/'><img src={require('../../images/THP-Logo-Main.png')}/></a>
            </div>
            {url.page ? <div className='nav-button' ><a href={`/${url.zipcode}`}>Back To Rates</a></div> : <div className='nav-button'  onClick={() => setNavPop(!navPop)}><span>Change ZipCode</span></div>}
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