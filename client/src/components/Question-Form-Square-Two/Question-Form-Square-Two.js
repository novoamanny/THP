import React, {useState} from 'react';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';
import RegisterFormButtons from '../Register-Form-Buttons/Register-Form-Buttons';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import '../Question-Form-Square/Question-Form-Square.css';


const QuestionFormSquareTwo = ({formData, setFormData, setMainFormIndex, mainFormIndex}) =>{

    const [formSlideIndex, setFormSlideIndex] = useState(0);
    const [disabledOn, setDisabledOn] = useState(true);


    const onCalendarClickHandle = (e) =>{
        console.log(e)
        setFormData({...formData, Date: e});
        if(disabledOn){
            setDisabledOn(!disabledOn);
        }
    }

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
                        <h2>You can select a future start date and still lock in today's rate. Texas Public Utility Commission rules allow you to select a switch date up to 14 days prior to your contract expiration date without an early termination penalty from your curretn provider.</h2>
                    </div>
                    <div className='qfs-options'>
                        <div className='qfs-option' onClick={() => setFormSlideIndex(1)}>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Move / New Service</p>
                            </div>
                        </div>
                        <div className='qfs-option' onClick={() => setFormSlideIndex(1)}>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Switching [Specific Date]</p>
                            </div>
                        </div>
                        <div className='qfs-option' onClick={() => setFormSlideIndex(1)}>
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
                <div className={ formSlideIndex === 1 ? 'qfs-two' : 'not-active'}>
                    <div className={formSlideIndex !== 1 && 'no-display'}> 
                        <ImportantNoteBox/>
                    </div>
                    
                    <div className={ formSlideIndex === 1 ? 'qfs-text' : (formSlideIndex === 3 ? 'qfs-text' : 'no-display')}> 
                        <p>Select Date:</p>
                    </div>
                    <div className={ formSlideIndex === 1 ? 'qfs-options' : (formSlideIndex === 3 ? 'qfs-options' : 'no-display')}>
                        <Calendar onClickDay={(e) => onCalendarClickHandle(e)}/>
                    </div>
                </div>
                
                
            </div>
            <RegisterFormButtons disabledOn={disabledOn} setMainFormIndex={setMainFormIndex} mainFormIndex={mainFormIndex}/>
        </div>
    )
}


export default QuestionFormSquareTwo;