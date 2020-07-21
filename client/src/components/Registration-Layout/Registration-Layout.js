import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RegistrationLeftSection from '../Registration-Left-Section/Registration-Left-Section';
import RegistrationMidSection from '../Registration-Mid-Section/Registration-Mid-Section';
import RegistrationRightSection from '../Registration-Right-Section/Registration-Right-Section';
import ConfirmationModal from '../Confirmation-Modal/Confirmation-Modal';


import {getRate} from '../../actions/rates';
import {getMeters, postRegister} from '../../actions/register';



import './Registration-Layout.css';


const RegistrationLayout = ({match, rates:{rate}, register:{meters, confirmation}, getRate, getMeters, postRegister}) =>{
    console.log(confirmation);
    useEffect(() => {
        
        getRate( match.params.id, match.params.provider, match.params.zipcode);
        
      },[getRate])
      
      
      const [formData, setFormData] = useState({
        EmailAddress: '',
        FirstName: '',
        LastName: '',
        Phone: '',
        Esiid: '',
        Address1: '',
        City: '',
        Rate: '',
        RateID: '',
        SSN: '',
        Provider: '',
        Date: '',
        SwitchType: 'Switching',
        DOBMonth: '',
        DOBDay: '',
        DOBYear: '',
        route: ''
    })
      

      const data = {
          RateID: rate && rate[0].RateID,
          ZipCode: match.params.zipcode,
          Rate: rate && rate[0].Rate,
          Provider: match.params.provider
      }

    return(
        <div className='Registration'>
            
            <RegistrationLeftSection />
            <RegistrationMidSection data={data} getMeters={getMeters} meters={meters} postRegister={postRegister} ZipCode={match.params.zipcode} Provider={match.params.provider} formData={formData} setFormData={setFormData}/>
            <RegistrationRightSection rate={rate} provider={match.params.provider} formData={formData}/>
            {
                confirmation && <ConfirmationModal confirmation={confirmation && confirmation}/>
            }
        </div>
    )
}


RegistrationLayout.propTypes = {
    getRate: PropTypes.func.isRequired,
    getMeters: PropTypes.func.isRequired,
    postRegister: PropTypes.func.isRequired,
    register: PropTypes.object.isRequired,
    rates: PropTypes.object.isRequired,
    meter: PropTypes.object.isRequired,
    confirmation: PropTypes.object.isRequired
   
}


const mapStateToProps = state => ({
    rates: state.rates,
    register: state.register
});


export default connect(mapStateToProps, {getRate, getMeters, postRegister})(RegistrationLayout);