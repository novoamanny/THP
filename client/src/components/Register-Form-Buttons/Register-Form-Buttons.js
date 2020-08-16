import React from 'react';

import './Register-Form-Buttons.css';

const RegisterFormButtons = ({disabledOn, setMainFormIndex, mainFormIndex}) =>{

   const add = mainFormIndex + 1;
   const sub = mainFormIndex - 1;

    

    return(
        <div className='Form-BTN'>
            <div className='back-btn'>
                <button  onClick={() => setMainFormIndex(sub)}> Back</button>
            </div>
            <div className='next-btn'>
                <button onClick={() => setMainFormIndex(add)}>Next</button>
            </div>
        </div>
    )
}

export default RegisterFormButtons;