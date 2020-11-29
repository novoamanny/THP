import React from 'react';

import '../Important-Note-Box/Important-Note-Box.css';

import './Footer.css';

const Footer = () =>{
    return(
        <div className='INB Footer'>

            <div>
                <p>
                *These estimates include all the recurring charges you'll see on your bill excluding government fees and taxes. Estimates are based on information provided by each energy company. These estimates should be confirmed using the information found in the Electricity Facts Label and Terms of Service. Actual price will vary according to your actual usage.
                </p>
            </div>

            <div className='footer-links'>
                <a href='https://www.texashomepower.com/privacy-policy/' target='_blank'>Privacy Policy</a>
                <a href='https://www.texashomepower.com/terms-of-service/' target='_blank'>Terms of Service</a>
            </div>
           
        </div>
    )
}


export default Footer;