import React, { useState } from 'react';
import QuestionFormSquare from '../Question-Form-Square/Question-Form-Square';
import QuestionFormSquareTwo from '../Question-Form-Square-Two/Question-Form-Square-Two';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';
import RegistrationForm from '../Registration-Form/Registration-Form';
import AddressListLayout from '../Address-List-Layout/Address-List-Layout';
import SubmitForService from '../Submit-For-Service/Submit-For-Service';
import ConfirmationForm from '../Confirmation-Form/Confirmation-Form';

import './Registration-Mid-Section.css';


const RegistrationMidSection = ({getESID, ACU, data, getMeters, meters, metersLoading, postRegister, ZipCode, Provider, formData, setFormData, setMainFormIndex, mainFormIndex, setChangeZipModal}) =>{
    const [answers, setAnswers] = useState({
        One: null,
        Two: null,
        Three: null,
        
    });
    

    const questionHandle = (index, answer) =>{
        let oldAnswers = {...answers};
        oldAnswers[index] = answer;


        setAnswers({...oldAnswers})
        if(index === 'Three'){
            setFormData({...formData, SwitchType: answer})
        }
    }
  
    return(
        <div className='RMS'>
          
            {
                mainFormIndex === 0 && <QuestionFormSquare getESID={getESID} ACU={ACU} metersLoading={metersLoading} answers={answers} questionHandle={questionHandle} setChangeZipCodeModal={setChangeZipModal} setMainFormData={setFormData} mainFormData={formData} meters={meters} getMeters={getMeters} ZipCode={ZipCode} Provider={Provider} setMainFormIndex={setMainFormIndex}/>
            }
            
            {
                mainFormIndex === 1 && <QuestionFormSquareTwo answers={answers} questionHandle={questionHandle} formData={formData} setFormData={setFormData} setMainFormIndex={setMainFormIndex} mainFormIndex={mainFormIndex}/>
            }
            {
                mainFormIndex === 2 && <RegistrationForm data={data} postRegister={postRegister} formData={formData} setFormData={setFormData} setMainFormIndex={setMainFormIndex} mainFormIndex={mainFormIndex}/>
            }
            {
                mainFormIndex === 3 && <SubmitForService data={data} postRegister={postRegister} formData={formData} setFormData={setFormData} setMainFormIndex={setMainFormIndex} mainFormIndex={mainFormIndex}/>
            }
            {
                mainFormIndex === 4 && <ConfirmationForm formData={formData}/>
            }
            
            
            
            
            
            
        </div>
    )

}

export default RegistrationMidSection;