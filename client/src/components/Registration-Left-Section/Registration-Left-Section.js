import React from 'react';

import QuestionFornSquare from '../Question-Form-Square/Question-Form-Square';
import RegistrationForm from '../Registration-Form/Registration-Form';

import './Registration-Left-Section.css';

const RegistrationLeftSection = ({data, getMeters, meters, postRegister}) =>{
    return(
        <div className='RLS'>
            <RegistrationForm data={data} getMeters={getMeters} meters={meters} postRegister={postRegister}/>
        </div>
    )
}

export default RegistrationLeftSection;