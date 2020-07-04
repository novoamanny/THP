import React, {useState} from 'react';

import './Registration-Form.css'
import { cookie } from 'request';

const RegistrationForm = ({data, getMeters, meters, postRegister}) =>{

    const [formData, setFormData] = useState({
        EmailAddress: '',
        FirstName: '',
        LastName: '',
        Phone: '',
        // Esiid: '',
        Address1: '',
        City: '',
        State: '',
        //Rate: ''
        // RateID: '',
        ServiceType: '',
        SSN: '',
        // Provider: '',
    })
        

    const {EmailAddress, FirstName, LastName, Phone, Address1, City, State, ServiceType, SSN} = formData;

    const {RateID, Rate, ZipCode, Provider} = data && data;


    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const buttonHandle = (e,value) => setFormData({...formData, [e.target.name]: value});

    const onSubmit = async e =>{

        e.preventDefault();

        const Meters = await getMeters(Address1, ZipCode, Provider);
        
       
      
        const form = {
            EmailAddress,
            FirstName,
            LastName,
            Phone,
            Address1: Meters && Meters.Address1,
            City: Meters && Meters.City,
            State: Meters && Meters.State,
            ServiceType,
            SSN,
            RateID,
            Rate,
            ZipCode,
            Provider,
            Esiid: Meters && Meters.Esiid,
        }

        postRegister(form);
        
        
    }


    return(
        <div className='RF'>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-title'>
                    <h2>Account Details</h2>
                </div>
                <div className='form'>
                <div className='form-btn' > 
                        <input  name='ServiceType' type='button' value={'Move In'} onClick={(e) => buttonHandle(e,'MoveIn')}/>
                        <input name='ServiceType'  type='button' value={'Switching'} onClick={(e) => buttonHandle(e,'Switching')}/>
                    </div>
                    <div className='form-first-name' > 
                        <input name='FirstName' placeholder='FIrst Name' type='text' onChange={(e) => onChange(e)}/>
                    </div>
                    
                    <div className='form-last-name'>
                        <input  name='LastName' placeholder='Last Name' type='text' onChange={(e) => onChange(e)}/>
                    </div>
                    <div className='form-email'>
                        <input name='EmailAddress' placeholder='Email Name' type='email' onChange={(e) => onChange(e)}/>
                    </div>
                    <div className='form-phone'>
                        <input name='Phone' placeholder='Mobile Phone #' type='text' onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-address'>
                        <input name='Address1' placeholder='# Street Address' type='text' onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-city'>
                        <input name='City' placeholder='City' type='text' onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-state'>
                        <input name='State' placeholder='State' type='text' onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-zipcode'>
                        <input name='ZipCode' placeholder='ZipCode' type='text' onChange={(e) => onChange(e)}/>
                        
                    </div>
                    <div className='form-SSN'>
                        <input name='SSN' placeholder='SSN #' type='text' onChange={(e) => onChange(e)}/>
                        
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