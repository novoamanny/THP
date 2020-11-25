import React from 'react';

import '../Important-Note-Box/Important-Note-Box.css';


const Footer = () =>{
    return(
        <div className='INB'>
            <div>
                <p>Important Notice:</p>
            </div>

            <div>
                <p>
                *These estimates include all the recurring charges you'll see on your bill excluding government fees and taxes. Estimates are based on information provided by each energy company. These estimates should be confirmed using the information found in the Electricity Facts Label and Terms of Service. Actual price will vary according to your actual usage.
                </p>
            </div>
           
        </div>
    )
}


export default Footer;