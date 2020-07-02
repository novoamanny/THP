import React from 'react';

import './Navbar.css'

const Navbar = () =>{
    return(
        <div className='Navbar'>
            <div className='nav-logo'>
                <a href='https://www.texashomepower.com/home/'><img src={require('../../images/THP-Logo-Main.png')}/></a>
            </div>
        </div>
    )
}

export default Navbar;