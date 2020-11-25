import React, {useState} from 'react';

import './Registration-Form.css'

import RegisterFormButtons from '../Register-Form-Buttons/Register-Form-Buttons';


const RegistrationForm = ({data, postRegister, formData, setFormData, setMainFormIndex, mainFormIndex}) =>{

    
        

    const {EmailAddress, FirstName, LastName, Phone, Address1, City, State, SwitchType, SSN, Esiid, Date, DOBDay, DOBMonth, DOBYear} = formData;

    const {RateID, Rate, ZipCode, Provider} = data && data;


    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const [SSNBox, setSSNBox] = useState(false);
    const [addressBox, setAddressBox] = useState(true);
    const [lanBox, setLanBox] = useState(true);
    // const [addressSlide, setAddressSlide] = useState(false);

    // const buttonHandle = (e,value) => setFormData({...formData, [e.target.name]: value});

    const nextForm = formData.FirstName === null || formData.LastName === null || formData.Email === null || formData.Phone === null || formData.Address1 === null || formData.SSN === null || !SSNBox ? null : '';
    const postRegisterHandle = async (formData) =>{
        postRegister(formData)
    }

    const onSubmitHandle = async e =>{

          
        
        e.preventDefault();

        const routes = [
            {
                prov: 'Pulse',
                route: 'https://api.pulsepowerpreview.com/api/pulse/CreateEnrollment'
            },
            {
                prov: 'etg',
                route: 'https://api.pulsepowerpreview.com/api/energytogo/CreateEnrollment'
            },
            {
                prov: 'lonestar',
                route: 'https://api.pulsepowerpreview.com/api/lonestar/CreateEnrollment'
            },
            {
                prov: 'newpower',
                route: 'https://api.pulsepowerpreview.com/api/newpowertexas/CreateEnrollment'
            },
            {
                prov: 'powernext',
                route: 'https://api.pulsepowerpreview.com/api/powernext/CreateEnrollment'
            },
        
        ]

        let temp;

            

        routes.forEach((provider, index) =>{
            if(provider.prov === Provider){
                temp = index;
            }
        })

        const ROUTE = routes[temp].route;
        console.log(ROUTE)
        
        const form ={

            EmailAddress, FirstName, LastName, Phone, Address1, City, State, SwitchType, SSN, Esiid, Date,RateID, Rate, ZipCode, Provider, ROUTE, DOBDay, DOBMonth, DOBYear
        }
       
        postRegisterHandle(form)
        
    }
    if(window.outerWidth <= 600){
        console.log('hello')
    }

    return(
        <div className='RF'>
            <div className='qfs-question'>
                <h2>Enrollment Details</h2> 
            </div>
            <div className='qfs-label'>
                <h2>Account Details</h2>
            </div>
            <form onSubmit={(e) => onSubmitHandle(e)}>
                
                <div className='form'>
                {/* <div className='form-btn' > 
                        <input  name='SwitchType' type='button' value={'Move In'} onClick={(e) => buttonHandle(e,'MoveIn')}/>
                        <input name='SwitchType'  type='button' value={'Switching'} onClick={(e) => buttonHandle(e,'Switching')}/>
                    </div> */}
                    <div className='form-sec-one'>
                        <div className='form-sec-one-one'>
                            <div className='form-first-name' >
                                <div className='form-label'>
                                    <span>First Name</span>
                                </div> 
                                <div className='form-input'>
                                    <input name='FirstName' placeholder='FIrst Name' type='text' value={FirstName} onChange={(e) => onChange(e)}/>
                                </div>
                                
                            </div>
                            <div className='form-email'>
                                <div className='form-label'>
                                    <span>Email Address</span>
                                </div> 
                                <div className='form-input'>
                                    <input name='EmailAddress' placeholder='Email Name' type='email' value={EmailAddress} onChange={(e) => onChange(e)}/>
                                </div>
                                
                            </div>
                            <div className='form-phone'>
                                <div className='form-label'>
                                    <span>Phone Number</span>
                                </div>
                                <div className='form-input'>
                                    <input name='Phone' placeholder='Mobile Phone #' type='text' value={Phone} onChange={(e) => onChange(e)}/>
                                </div>
                                
                            </div>
                        </div>
                        <div className='form-sec-one-two'>
                            <div className='form-last-name'>
                                <div className='form-label'>
                                    <span>Last Name</span>
                                </div>
                                <div className='form-input'>
                                    <input  name='LastName' placeholder='Last Name' type='text' value={LastName} onChange={(e) => onChange(e)}/>
                                </div>
                                
                            </div>
                            <div className='form-email'>
                                <div className='form-label'>
                                    <span>Confirm Email Address</span>
                                </div>
                                <div className='form-input'>
                                    <input name='EmailAddress' placeholder='Email Name' type='email' value={EmailAddress} onChange={(e) => onChange(e)}/>
                                </div>
                            </div>
                            <div className='form-DOB'>
                                <div className='form-label'>
                                    <span>Date of Birth (MM/DD/YYYY)</span>
                                </div>
                                <div className='DOB-input'>
                                    <div>
                                        
                                        <input name='DOBMonth' placeholder='Month' type='text' value={DOBMonth} onChange={(e) => onChange(e)}/>
                                    
                                    </div>
                                    <div>
                                        <input name='DOBDay' placeholder='Day' type='text' value={DOBDay} onChange={(e) => onChange(e)}/>

                                    </div>
                                    <div>

                                        <input name='DOBYear' placeholder='Year' type='text' value={DOBYear} onChange={(e) => onChange(e)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                    <div className='form-sec-two'>




                        <div className='form-sec-two-one' onClick={() => setAddressBox(!addressBox)}>
                            <div className={addressBox ? 'form-sec-two-square checked' : 'form-sec-two-square'} >

                            </div>
                            <div className='form-sec-two-option'>
                                <li>My Mailing Address is the same as the service address.</li>
                            </div>
                        </div>
                        <div className='form-sec-two-two'>
                            <li>{`${Address1} ${City}, ${State} ${ZipCode}`}</li>
                        </div>
                    </div>

                    
                    <div className={ !addressBox ? 'form-sec-three form-sec-three-slide' : 'form-sec-three'}>
                        <div className='form-sec-three-one'>
                            <h2>Current Address</h2>
                        </div>
                        <div className='form-sec-three-two'>
                            <div className='side-a'>
                                <div className='form-address'>
                                    <div className='form-label'>
                                        <span>Address 1</span>
                                    </div>
                                    <div className='form-input'>
                                        <input name='Address1' placeholder='# Street Address' type='text' value={addressBox ? Address1 : ''} onChange={(e) => onChange(e)}/>
                                    </div>
                                </div>
                                <div className='form-city'>
                                    <div className='form-label'>
                                        <span>City</span>
                                    </div>
                                    <div className='form-input'>
                                        <input name='City' placeholder='City' type='text' value={addressBox ? City : ''} onChange={(e) => onChange(e)}/>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='side-b'>
                                <div className='form-address'>
                                    <div className='form-label'>
                                        <span>Address 2</span>
                                    </div>
                                    <div className='form-input'>
                                        <input name='Address1' placeholder='# Street Address' type='text' value={''} onChange={(e) => onChange(e)}/>
                                    </div>
                                </div>
                                <div className='state-zip'>
                                    <div className='form-state'>
                                        <div className='form-label-state'>
                                            <span>State</span>
                                        </div>
                                        <div className='form-input-state'>
                                            <input name='State' placeholder='State' type='text' value={addressBox ? State : ''} onChange={(e) => onChange(e)}/>
                                        </div>
                                    </div>
                                    <div className='form-zipcode'>
                                        <div className='form-label-state'>
                                            <span>ZipCode</span>
                                        </div>
                                        <div className='form-input-zipcode'>
                                            <input name='ZipCode' placeholder='ZipCode' type='text' value={addressBox ? ZipCode : ''} onChange={(e) => onChange(e)}/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className='form-sec-two'>
                         <div className='form-sec-two-one'>
                            
                            <div className='form-sec-two-option'>
                                <li>Would you prefer to communicate in English or Spanish?</li>
                            </div>
                        </div>

                        <div className='form-sec-two-one' onClick={() => setLanBox(!lanBox)}>
                            <div className={lanBox ? 'form-sec-two-square checked' : 'form-sec-two-square'} >

                            </div>
                            <div className='form-sec-two-option'>
                                <li>English</li>
                            </div>
                        </div>

                        <div className='form-sec-two-one' onClick={() => setLanBox(!lanBox)}>
                            <div className={!lanBox ? 'form-sec-two-square checked' : 'form-sec-two-square'} >

                            </div>
                            <div className='form-sec-two-option'>
                                <li>Spanish</li>
                            </div>
                        </div>

                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    <div className='form-SSN'>
                        <div className='UCC-label'>
                            <h2>Utility Credit Check</h2>
                        </div>
                        <div className='UCC-UI'>
                            <div className='UCC-desc'>
                                <div className='UCC-desc-one'>
                                    <span>All energy companies in Texas run a credit check to determine if a deposit will be required. This is a "soft" credit check that will not impact your credit score.</span>
                                </div >
                                <div className='UCC-desc-two'>
                                    <span>Your information is securely transmitted over an encrypted connection.</span>
                                </div>
                                <div className='UCC-desc-three'>
                                    <span>Using your Social Security number is the most accurate way to verify your identity and may help avoid a deposit</span>
                                </div>
                            </div>
                            <div className='UCC-form-label'>
                                <span>SSN</span>
                            </div>
                            <div className='UCC-form-input'>
                                <input name='SSN' placeholder='___-__-____' type='text' value={SSN} onChange={(e) => onChange(e)}/>
                            </div>
                            <div className='UCC-form-checkbox'>
                                <div className={ !SSNBox ? 'UCC-form-checkbox-square' : 'UCC-form-checkbox-square checked'} onClick={() => setSSNBox(!SSNBox)}>

                                </div>
                                <div className='UCC-form-checkbox-text'>
                                    <span>I hereby authorize my chosen provider to run a credit check and perform all necessary tasks to establish electricity service. I accept the terns and conditions of my chosen provider's privacy plan and terms of service.</span>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    {/* <div className='form-submit'>
                        <input className='form-submit-btn' type='submit' value={'Submit'}/>
                    </div> */}
                </div>
                
            </form>
            <RegisterFormButtons  nextForm={nextForm} formData={formData} onSubmitHandle={onSubmitHandle} setMainFormIndex={setMainFormIndex} mainFormIndex={mainFormIndex}/>
        </div>
    )
}


export default RegistrationForm;