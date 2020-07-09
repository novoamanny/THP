import React from 'react';
import QuestionFormSquare from '../Question-Form-Square/Question-Form-Square';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';
import RegistrationForm from '../Registration-Form/Registration-Form';
import AddressListLayout from '../Address-List-Layout/Address-List-Layout';

import './Registration-Mid-Section.css';

const RegistrationMidSection = ({data, getMeters, meters, postRegister, ZipCode, Provider}) =>{

        return(
            <div className='RMS'>
                <RegistrationForm data={data} meters={meters} postRegister={postRegister}/>
                <QuestionFormSquare getMeters={getMeters} ZipCode={ZipCode} Provider={Provider}/>
                
                {
                    meters && <ImportantNoteBox/>
                }
                <AddressListLayout meters={meters}/>
            </div>
        )

}

export default RegistrationMidSection;