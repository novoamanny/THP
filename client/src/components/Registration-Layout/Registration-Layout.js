import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RegistrationLeftSection from '../Registration-Left-Section/Registration-Left-Section';
import RegistrationMidSection from '../Registration-Mid-Section/Registration-Mid-Section';
import RegistrationRightSection from '../Registration-Right-Section/Registration-Right-Section';
import ConfirmationModal from '../Confirmation-Modal/Confirmation-Modal';
import ChangeZipCodeModal from '../Change-ZipCode-Modal/Change-ZipCode-Modal';
import PlanDetailsPop from '../Plan-Details-Pop/Plan-Details-Pop';
import Spinner from '../Spinner/Spinner';

import {getRate} from '../../actions/rates';
import {getMeters, postRegister} from '../../actions/register';



import './Registration-Layout.css';
import Navbar from '../Navbar/Navbar';


const RegistrationLayout = ({match, rates:{rate, rateLoading}, register:{meters, confirmation, metersLoading}, getRate, getMeters, postRegister}) =>{
    
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
        ZipCode: match.params.zipcode,
        Rate: null,
        RateID: null,
        SSN: '',
        Provider: match.params.provider,
        Date: '',
        SwitchType: 'Switching',
        DOBMonth: '',
        DOBDay: '',
        DOBYear: '',
        route: ''
    })

    const [mainFormIndex, setMainFormIndex] = useState(0);
    const [changeZipModal, setChangeZipModal] = useState(false)
    const [changePDP, setChangePDP] = useState(false)
      const RATE = {
          Provider: match.params.provider,
          rateData: rate && rate[0]
      }
      
      if(rate && formData.Rate === null || rate && formData.RateID === null){
          setFormData({...formData,
            Rate: rate[0].Rate,
            RateID: rate[0].RateID,
          })
      }

      const data = {
          RateID: rate && rate[0].RateID,
          ZipCode: match.params.zipcode,
          Rate: rate && rate[0].Rate,
          Provider: match.params.provider
      }
      

    return rateLoading && rate === null ? <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center',position: 'fixed', top: '35%'}}><Spinner/></div> : (
        <div className='Registration'>
            <Navbar url={match.params}/>
            
            <RegistrationLeftSection mainFormIndex={mainFormIndex}/>
            <RegistrationMidSection metersLoading={metersLoading} loa mainFormIndex={mainFormIndex} setMainFormIndex={setMainFormIndex} data={data} getMeters={getMeters} meters={meters} postRegister={postRegister} ZipCode={match.params.zipcode} Provider={match.params.provider} formData={formData} setFormData={setFormData} setChangeZipModal={setChangeZipModal}/>
            <RegistrationRightSection mainFormIndex={mainFormIndex} rate={rate} PUCT={match.params.PUCT} provider={match.params.provider} formData={formData} setMainFormIndex={setMainFormIndex} setChangePDP={setChangePDP} watt={match.params.watt}/>
            {
                changeZipModal && <ChangeZipCodeModal setChangeZipModal={setChangeZipModal} ZipCode={match.params.zipcode}/>
            }
            {
                changePDP && <PlanDetailsPop setChangePDP={setChangePDP} rate={RATE}/>
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