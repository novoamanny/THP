import React, { useState } from 'react';
import htmlCanvas from 'html2canvas';
import RegisterFormButtons from '../Register-Form-Buttons/Register-Form-Buttons';

import html2Canvas from 'html2canvas';

import './Submit-For-Service.css';


const SubmitForService = ({mainFormIndex, setMainFormIndex, data}) =>{

    const [nextForm, setNextForm] = useState(null);

    const onClickHandle = () =>{

        if(nextForm === null){
            setNextForm('');
            htmlCanvas(document.getElementById('capture')).then((canvas) => {

                const image = canvas.toDataURL("image/png").replace("image/png");
                
                
                console.log(image);
            })
            
        }
        else{
            setNextForm(null);
        }
    }
    
    
    const providerName = data.Provider === 'Pulse' ? 'Pulse Power' : ''

    const depositDesc = [
        `Letter of Guarantee from a current, eligible ${providerName} customer: Call us at 877-524-5231 to request a form and confirm your guarantors eligibility.`,
        `Letter of Credit from your most recent electricity provider. Ask your previous provider to fax it to 713-488-4422 or 800- 583-0120, including [1] your ${providerName} account number, [2] name on the account, [3] service address and [4] your contact phone number on your fax cover sheet. You can also mail it to ${providerName}, P.O. Box 3785, Houston, TX 77253-3765.`,
        `Proof that you are a senior citizen of at least 65 years of age: Fax identification to 713-488-4422 or 800-563-0120, including (1) your ${providerName} account number, (2) name on the account, (3) service address and (4) your contact phone number on your fax cover sheet.`,
        `Proof of medical indigency: Submit a certification letter establishing that you are medically indigent by fax to 713-488-4422 or 800-563-0120, including (1) your ${providerName} account number, (2) name on the account, (3) service address and (4) your contact phone number on your fax cover sheet. You can also send this information by mail to ${providerName}, P.O. Box 3765, Houston, TX 77253-3765. Call us at 877-524-5231 or chat online with a customer care representative for details.`,
        `Proof that you are a victim of family violence: Fax a copy of your certification letter/waiver for electric service — which you should have received from the Texas Council on Family Violence, dated within the past 12 months to 713-488-4422 or 800-563-0120. If you do not have the completed documentation, you may obtain it from your caseworker. Include (1) your ${providerName} account number, (2) name on the account, (3) service address and (4) your contact phone number on your fax cover sheet.`
    ];

    return(
        <div   className='SFS'>
            <div className='qfs-question'>
                <h2>Submit For Enrollment</h2>
            </div>
            <div className='qfs-label'>
                <h2>I Agree</h2>
            </div>
            <div className='SFS-questions'>
                
                <div className='SFS-question' onClick={() => onClickHandle()}>
                    <div className={nextForm === null ? 'SFS-checkbox' : 'SFS-checkbox SFS-checkbox-active'}>

                    </div>
                    <div className='SFS-text'>
                        <span>
                            {
                            `I understand that a move-in or switch request can only be made by the electric service applicant or the applicant’s authorized agent. I confirm that I am at least eighteen years of age and legally authorized to change REPs for the address listed above. I understand that I am authorizing ${providerName}, LLC (${providerName}) to become my new Retail Electric Provider (REP) in place of my current REP, if applicable. I authorize ${providerName} to perform the necessary tasks in order to make this change. If requesting to switch REPs, I understand that I will have three federal business days to cancel my enrollment in this plan, without penalty, after I receive my Terms of Service. I understand that ${providerName} or its agent will investigate my personal credit and financial records. I hereby authorize ${providerName} to request and obtain consumer credit reports and/or credit references on me in connection with any account(s) or other transactions with ${providerName}. I understand that my eligibility to receive a promotional incentive in connection with this enrollment, if any, is subject to the applicable terms and conditions for such promotional incentive. I have read and understand the contract documents for this plan, which include the Terms of Service, Electricity Facts Label and Your Rights as a Customer documents. I can print and save copies of these documents which are provided above. I understand that after submitting this enrollment request, I will also receive a copy of these documents, including the Terms of Service, from ${providerName} via email, and upon request, via US mail, and that these documents, including the Terms of Service, explain all the terms of the agreement and how to exercise the right of rescission, if applicable. I agree to allow Texas Home Power to share all information I have provided with ${providerName}.
                            `} 
                        </span>
                    </div>
                </div>
                    

                <div className='SFS-text-two'>
                        <span>
                            {
                            `Information about available options for satisfying the deposit:
                            `} 
                        </span>
                        <span className='highlight'>
                            {
                            `["depositDueText"]
                            `} 
                        </span>
                </div>
                <div className='SFS-text-two'>
                        <span>
                            {
                            `Information about deposit reason:
                            `} 
                        </span>
                        <span className='highlight'>
                            {
                            `["depositReasonText"]
                            `} 
                        </span>
                </div>
                <div className='SFS-text-two'>
                        <span>
                            {
                            `Information about deposit reason:
                            `} 
                        </span>
                        <div className='SFS-text-details'>
                                {depositDesc.map((item, index) => <li key={index}>{item}</li>)}
                        </div>
                </div>
            </div>
            <RegisterFormButtons nextForm={nextForm} mainFormIndex={mainFormIndex} setMainFormIndex={setMainFormIndex}/>
        </div>
    )
}


export default SubmitForService;