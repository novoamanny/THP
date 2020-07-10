import React, {useState} from 'react';

import './Registration-Form.css'


const RegistrationForm = ({data, postRegister, formData, setFormData}) =>{

    
        

    const {EmailAddress, FirstName, LastName, Phone, Address1, City, State, SwitchType, SSN, Esiid, Date} = formData;

    const {RateID, Rate, ZipCode, Provider} = data && data;


    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const buttonHandle = (e,value) => setFormData({...formData, [e.target.name]: value});


    const postRegisterHandle = async (formData) =>{
        postRegister(formData)
    }

    const onSubmit = async e =>{

          
        
        e.preventDefault();

        const routes = [
            {
                prov: 'pulse',
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

            EmailAddress, FirstName, LastName, Phone, Address1, City, State, SwitchType, SSN, Esiid, Date,RateID, Rate, ZipCode, Provider, ROUTE
        }
       
        postRegisterHandle(form)
        
    }


    return(
        <div className='RF'>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-title'>
                    <h2>Account Details</h2>
                </div>
                <div className='form'>
                <div className='form-btn' > 
                        <input  name='SwitchType' type='button' value={'Move In'} onClick={(e) => buttonHandle(e,'MoveIn')}/>
                        <input name='SwitchType'  type='button' value={'Switching'} onClick={(e) => buttonHandle(e,'Switching')}/>
                    </div>
                    <div className='form-first-name' > 
                        <input name='FirstName' placeholder='FIrst Name' type='text' value={FirstName} onChange={(e) => onChange(e)}/>
                    </div>
                    
                    <div className='form-last-name'>
                        <input  name='LastName' placeholder='Last Name' type='text' value={LastName} onChange={(e) => onChange(e)}/>
                    </div>
                    <div className='form-email'>
                        <input name='EmailAddress' placeholder='Email Name' type='email' value={EmailAddress} onChange={(e) => onChange(e)}/>
                    </div>
                    <div className='form-phone'>
                        <input name='Phone' placeholder='Mobile Phone #' type='text' value={Phone} onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-address'>
                        <input name='Address1' placeholder='# Street Address' type='text' value={Address1} onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-city'>
                        <input name='City' placeholder='City' type='text' value={City} onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-state'>
                        <input name='State' placeholder='State' type='text' value={State} onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-zipcode'>
                        <input name='ZipCode' placeholder='ZipCode' type='text' value={ZipCode} onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-SSN'>
                        <input name='SSN' placeholder='SSN #' type='text' value={SSN} onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-submit'>
                        <input className='form-submit-btn' type='submit' value={'Submit'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default RegistrationForm;