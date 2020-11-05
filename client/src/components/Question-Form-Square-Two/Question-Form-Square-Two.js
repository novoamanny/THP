import React, {useState} from 'react';
import styles from 'react-calendar/dist/Calendar.css';
import ImportantNoteBoxTwo from '../Important-Note-Box-Two/Important-Note-Box-Two';
import RegisterFormButtons from '../Register-Form-Buttons/Register-Form-Buttons';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import '../Question-Form-Square/Question-Form-Square.css';
import './Question-Form-Square-Two.css';


const QuestionFormSquareTwo = ({answers,questionHandle, formData, setFormData, setMainFormIndex, mainFormIndex}) =>{

    const [formSlideIndex, setFormSlideIndex] = useState(0);
    const [disabledOn, setDisabledOn] = useState(true);

    const onCLickHandle = (index, answer, slideIndex) =>{
        questionHandle(index, answer);
        setFormSlideIndex(slideIndex);
    }

    const onCalendarClickHandle = (e) =>{
        
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
                        <div className='qfs-option' onClick={() => onCLickHandle('Three', 'MoveIn', 1)}>
                            <div className='qfs-option-box-container'>
                                <div className={answers.Three === 'MoveIn' ? 'qfs-option-box qfs-active' : 'qfs-option-box'}>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Move / New Service</p>
                            </div>
                        </div>
                        <div className='qfs-option' onClick={() => onCLickHandle('Three', 'Switching', 1)}>
                            <div className='qfs-option-box-container'>
                                <div className={answers.Three === 'Switching' ? 'qfs-option-box qfs-active' : 'qfs-option-box'}>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Switching [Specific Date]</p>
                            </div>
                        </div>
                        {/* <div className='qfs-option' onClick={() => setFormSlideIndex(1)}>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Switching [Standard Switch]</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className={ formSlideIndex === 1 ? 'qfs-two' : 'not-active'}>
                    <div className={formSlideIndex !== 1 ? 'no-display' : undefined}> 
                        <ImportantNoteBoxTwo/>
                    </div>
                    
                    <div className={ formSlideIndex === 1 ? 'qfs-text' : (formSlideIndex === 3 ? 'qfs-text' : 'no-display')}> 
                        <p>Select Date:</p>
                    </div>
                    <div className={ formSlideIndex === 1 ? 'qfs-options-cal' : (formSlideIndex === 3 ? 'qfs-optionsl' : 'no-display')}>
                        <Calendar className='calendar-size' tileClassName='calendar-size' onClickDay={(e) => onCalendarClickHandle(e)}/>
                    </div>
                </div>
                
                
            </div>
            <RegisterFormButtons disabledOn={disabledOn} setMainFormIndex={setMainFormIndex} mainFormIndex={mainFormIndex}/>
        </div>
    )
}


export default QuestionFormSquareTwo;