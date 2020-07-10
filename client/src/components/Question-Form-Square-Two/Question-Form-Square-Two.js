import React from 'react';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const QuestionFormSquareTwo = ({formData, setFormData}) =>{
    return(
        <div className='QFST'>
            <div className='qfs-top'>
                <div className='qfs-question'>
                    <h2>When Do You Need This Electricity Service?</h2> 
                </div>
                <div className='qfs-label'>
                    <h2>Service Start Date</h2>
                </div>
            </div>
           
            <div className='qfs-layout'>
                <div className='qfs-one'>
                    <div className='qfs-text'>
                        <p>You can select a future start date and still lock in today's rate. Texas Public Utility Commission rules allow you to select a switch date up to 14 days prior to your contract expiration date without an early termination penalty from your curretn provider.</p>
                    </div>
                    <div className='qfs-options'>
                        <div className='qfs-option'>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Move / New Service</p>
                            </div>
                        </div>
                        <div className='qfs-option'>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Switching [Specific Date]</p>
                            </div>
                        </div>
                        <div className='qfs-option'>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Switching [Standard Switch]</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='qfs-two'>
                    <ImportantNoteBox/>
                    <div className='qfs-text'> 
                        <p>Select Date:</p>
                    </div>
                    <div className='qfs-options'>
                        <Calendar onClickDay={(e) => setFormData({...formData, Date: e})}/>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}


export default QuestionFormSquareTwo;