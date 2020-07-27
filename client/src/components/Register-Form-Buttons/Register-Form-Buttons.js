import React from 'react';

const RegisterFormButtons = ({disabledOn, setMainFormIndex, mainFormIndex}) =>{

    const formIndexHandle = async (index) =>{
        setMainFormIndex(index);
    }

    return(
        <div>
            <div >
                <input type='button' value='Back' onClick={() => formIndexHandle(mainFormIndex--)}/>
            </div>
            <div>
                <input type='button' value='Next' disabled={disabledOn} onClick={() => formIndexHandle(mainFormIndex++)}/>
            </div>
        </div>
    )
}

export default RegisterFormButtons;