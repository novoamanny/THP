import React from 'react';
import QuestionFormSquare from '../Question-Form-Square/Question-Form-Square';
import QuestionFormSquareTwo from '../Question-Form-Square-Two/Question-Form-Square-Two';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';
import RegistrationForm from '../Registration-Form/Registration-Form';
import AddressListLayout from '../Address-List-Layout/Address-List-Layout';

import './Registration-Mid-Section.css';


const RegistrationMidSection = ({data, getMeters, meters, postRegister, ZipCode, Provider, formData, setFormData}) =>{

        return(
            <div className='RMS'>
                <RegistrationForm data={data} postRegister={postRegister} formData={formData} setFormData={setFormData}/>
                <QuestionFormSquareTwo formData={formData} setFormData={setFormData}/>
                <QuestionFormSquare getMeters={getMeters} ZipCode={ZipCode} Provider={Provider} />
                
                {
                    meters && <ImportantNoteBox/>
                }
                <AddressListLayout meters={meters} setFormData={setFormData} formData={formData}/>
            </div>
        )

}

export default RegistrationMidSection;