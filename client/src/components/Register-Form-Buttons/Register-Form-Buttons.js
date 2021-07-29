import React, { useState } from 'react';
// import htmlCanvas from 'html2canvas';

import './Register-Form-Buttons.css';

const RegisterFormButtons = ({tokenize, disabledOn, setMainFormIndex, mainFormIndex, onSubmitHandle, formData, nextForm, setFormData}) =>{

    const [fomrData, setFormDat] = useState(formData && formData)
    
    const add = mainFormIndex + 1;
    const sub = mainFormIndex - 1;
    const clickHandle = async () =>{
        if(mainFormIndex === 2){
            console.log('here')
            if(formData.Provider !== 'Pulse'){
                const a = await tokenize(fomrData.Provider, formData.SSN, formData.DL)
                
                
                setFormData({...formData, SSN: a.SSN, DL: a.DL});
            }
            
        }
        if(mainFormIndex === 3){
            //  htmlCanvas(document.getElementById('capture')).then((canvas) => {
            //     const image = canvas.toDataURL("image/jpg");
            //     console.log(image);
            // })
            setMainFormIndex(add);
            
        }else{
            setMainFormIndex(add)
        }
        
    }

    return(
        <div className='Form-BTN'>
            <div className='back-btn'>
                {mainFormIndex === 1 ? <a href={''}><button> Back</button></a> : <button  onClick={() => setMainFormIndex(sub)}> Back</button>}
                
            </div>
            <div className={nextForm === null ? 'next-btn disabled-btn' : 'next-btn'}>
                <button onClick={nextForm === null ? null : () => clickHandle()}>Next</button>
            </div>
        </div>
    )
}

export default RegisterFormButtons;