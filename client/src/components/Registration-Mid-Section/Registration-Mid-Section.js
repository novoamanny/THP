import React from 'react';
import QuestionFormSquare from '../Question-Form-Square/Question-Form-Square';
import QuestionFormSquareTwo from '../Question-Form-Square-Two/Question-Form-Square-Two';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';
import RegistrationForm from '../Registration-Form/Registration-Form';
import AddressListLayout from '../Address-List-Layout/Address-List-Layout';

import './Registration-Mid-Section.css';


const RegistrationMidSection = ({data, getMeters, meters, postRegister, ZipCode, Provider, formData, setFormData, setMainFormIndex, mainFormIndex, setChangeZipModal}) =>{


        return(
            <div className='RMS'>
                {
                    mainFormIndex === 0 && <QuestionFormSquare setChangeZipCodeModal={setChangeZipModal} setMainFormData={setFormData} mainFormData={formData} meters={meters} getMeters={getMeters} ZipCode={ZipCode} Provider={Provider} setMainFormIndex={setMainFormIndex}/>
                }
               
                {
                    mainFormIndex === 1 && <QuestionFormSquareTwo formData={formData} setFormData={setFormData} setMainFormIndex={setMainFormIndex} mainFormIndex={mainFormIndex}/>
                }
                {
                    mainFormIndex === 2 && <RegistrationForm data={data} postRegister={postRegister} formData={formData} setFormData={setFormData} setMainFormIndex={setMainFormIndex} mainFormIndex={mainFormIndex}/>
                }
                
                
                
                
                
                
            </div>
        )

}

export default RegistrationMidSection;