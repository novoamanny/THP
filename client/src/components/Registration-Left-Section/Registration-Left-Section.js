import React from 'react';


import './Registration-Left-Section.css';

import './Registration-Left-Section.css';

const RegistrationLeftSection = () =>{
    return(
        <div className='RLS'>
            <div className='RLS-Top'>
                <h2>Progess</h2>
            </div>
            <div className='RLS-Bottom'>
                <div className='progress'>
                    <div className='progress-circle'>

                    </div>
                    <div className='progress-label'>
                        <span>Where Do You Need Service?</span>
                    </div>
                    <div className='progress-empty'>

                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-circle'>

                    </div>
                    <div className='progress-label'>
                        <span>When Do You Need Service?</span>
                    </div>
                    <div className='progress-empty'>

                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-circle'>

                    </div>
                    <div className='progress-label'>
                        <span>Confirm Enrollment</span>
                    </div>
                    <div className='progress-empty'>

                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-circle'>

                    </div>
                    <div className='progress-label'> 
                        <span>Submit For Service</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RegistrationLeftSection;