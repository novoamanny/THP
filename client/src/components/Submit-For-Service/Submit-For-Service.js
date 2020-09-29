import React, { useState } from 'react';
import RegisterFormButtons from '../Register-Form-Buttons/Register-Form-Buttons';

import './Submit-For-Service.css';


const SubmitForService = ({mainFormIndex, setMainFormIndex}) =>{

    const [boxes, setBoxes] = useState({
        boxOne: 0,
        boxTwo: 0,
        boxThree: 0
    })

    const total = boxes.boxOne + boxes.boxTwo + boxes.boxThree
    total === 3 && console.log('Approvd')

    const onClickHandle = (label) =>{
        if(boxes[label] === 0){
            let b = {...boxes};
            b[label] = 1;
            setBoxes({...b})
        }
        if(boxes[label] === 1){
            let b = {...boxes};
            b[label] = 0;
            setBoxes({...b})
        }
    }

    return(
        <div className='SFS'>
            <div className='SFS-title'>
                <h2>Submit For Enrollment</h2>
            </div>
            <div className='SFS-label'>
                <h2>I Agree</h2>
            </div>
            <div className='SFS-questions'>
                <div className='SFS-question' onClick={() => onClickHandle('boxOne')}>
                    <div className={boxes.boxOne === 0 ? 'SFS-checkbox' : 'SFS-checkbox SFS-checkbox-active'}>

                    </div>
                    <div className='SFS-text'>
                        <span>I have verified my enrollment details presented on this page and confirm everything is correct.</span>
                    </div>
                </div>
                <div className='SFS-question' onClick={() => onClickHandle('boxTwo')}>
                    <div className={boxes.boxTwo === 0 ? 'SFS-checkbox' : 'SFS-checkbox SFS-checkbox-active'}>

                    </div>
                    <div className='SFS-text'>
                        <span>
                            I understand that a move-in or switch request can only be made by electric service applicant or the applicant's authorized agent.
                            I confirm that I am at least eighteen years of and legally authorized to change REPs for the address. i understand that I am authorizing Pulse Power to become my new Retail Electric Provider [REP]
                            in place of my current REP, if applicable, I authorize Pulse Power to perform the necessary tasks in order to make this change.
                        </span>
                    </div>
                </div>
                <div className='SFS-question' onClick={() => onClickHandle('boxThree')}>
                    <div className={boxes.boxThree === 0 ? 'SFS-checkbox' : 'SFS-checkbox SFS-checkbox-active'}>

                    </div>
                    <div className='SFS-text'>
                        <span>
                            I have read and understand the contract documents for this plan, which include the Terms of Service, Electricity Facts Label and Your
                            Rights as a Customer documetns, I understand that after submitting this enrollment request, I will also receive a copy of these documents,
                            including the Terms of Service from Pulse Power via email, and upon the request the Pulse Power, via US mail, and that these documents,
                            including the Terms of Service, explain all the terms of agreement and how to exercise the right of rescission, if applicable.
                        </span>
                    </div>
                </div>
            </div>
            <RegisterFormButtons mainFormIndex={mainFormIndex} setMainFormIndex={setMainFormIndex}/>
        </div>
    )
}


export default SubmitForService;