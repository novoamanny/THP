import React, { useState } from 'react';

import './Register-Form-Buttons.css';

const RegisterFormButtons = ({disabledOn, setMainFormIndex, mainFormIndex, onSubmitHandle, formData}) =>{

    const [fomrData, setFormDat] = useState(formData && formData)
    console.log(fomrData)
    const add = mainFormIndex + 1;
    const sub = mainFormIndex - 1;
    const clickHandle = () =>{
        if(mainFormIndex === 3){
            setMainFormIndex(add);
            
        }else{
            setMainFormIndex(add)
        }
        
    }

    return(
        <div className='Form-BTN'>
            <div className='back-btn'>
                <button  onClick={() => setMainFormIndex(sub)}> Back</button>
            </div>
            <div className='next-btn'>
                <button onClick={() => clickHandle()}>Next</button>
            </div>
        </div>
    )
}

export default RegisterFormButtons;