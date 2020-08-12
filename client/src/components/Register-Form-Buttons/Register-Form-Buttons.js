import React from 'react';

import './Register-Form-Buttons.css';

const RegisterFormButtons = ({disabledOn, setMainFormIndex, mainFormIndex}) =>{

    const formIndexHandle = async (index) =>{
        setMainFormIndex(index);
    }

    return(
        <div className='Form-BTN'>
            <div className='back-btn'>
                <input type='button' value='Back' onClick={() => formIndexHandle(mainFormIndex--)}/>
            </div>
            <div className='next-btn'>
                <input type='button' value='Next' disabled={disabledOn} onClick={() => formIndexHandle(mainFormIndex++)}/>
            </div>
        </div>
    )
}

export default RegisterFormButtons;