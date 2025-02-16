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
import {getMeters, postRegister, addressCleanUpNRG, getESID, tokenize} from '../../actions/register';



import './Registration-Layout.css';
import Navbar from '../Navbar/Navbar';


const RegistrationLayout = ({match, rates:{rate, rateLoading}, register:{meters, confirmation, metersLoading}, getRate, getMeters, postRegister, addressCleanUpNRG, getESID, tokenize}) =>{
    
    useEffect(() => {
        
        getRate( match.params.id, match.params.provider, match.params.zipcode, match.params.campaignCode);
        
      },[getRate])
      
    
      const [formData, setFormData] = useState({
        EmailAddress: null,
        FirstName: null,
        LastName: null,
        Phone: null,
        Esiid: null,
        Address1: null,
        City: null,
        ZipCode: match.params.zipcode,
        Rate: null,
        RateID: null,
        SSN: null,
        Provider: match.params.provider,
        Date: null,
        SwitchType: null,
        DOBMonth: null,
        DL: null,
        DOBDay: null,
        DOBYear: null,
    })
   
    const [mainFormIndex, setMainFormIndex] = useState(0);
    const [changeZipModal, setChangeZipModal] = useState(false)
    const [changePDP, setChangePDP] = useState(false)
    const [orderPop, setOrderPop] = useState(false);
      
      
      if(rate && formData.Rate === null || rate && formData.RateID === null){
          setFormData({...formData,
            Rate: rate.offerRate,
            RateID: rate.offerID,
          })
      }



    return rateLoading && rate === null ? <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center',position: 'fixed', top: '35%'}}><Spinner/></div> : (
        <div id='capture' className='Registration'>
            <Navbar url={match.params} orderPop={orderPop} setOrderPop={setOrderPop}/>
          
            <RegistrationLeftSection mainFormIndex={mainFormIndex}/>
            <RegistrationMidSection tokenize={tokenize} getESID={getESID} ACU={addressCleanUpNRG} metersLoading={metersLoading} mainFormIndex={mainFormIndex} setMainFormIndex={setMainFormIndex} data={rate} getMeters={getMeters} meters={meters} postRegister={postRegister} ZipCode={match.params.zipcode} Provider={match.params.provider} formData={formData} setFormData={setFormData} setChangeZipModal={setChangeZipModal}/>
            <RegistrationRightSection orderPop={orderPop} data={rate} mainFormIndex={mainFormIndex} rate={rate} PUCT={match.params.PUCT} provider={match.params.provider} formData={formData} setMainFormIndex={setMainFormIndex} setChangePDP={setChangePDP} watt={match.params.watt}/>
            
            {
                changeZipModal && <ChangeZipCodeModal setChangeZipModal={setChangeZipModal} ZipCode={match.params.zipcode}/>
            }
            {
                changePDP && <PlanDetailsPop setChangePDP={setChangePDP} rate={rate}/>
            }
          
        </div>
    )
}


RegistrationLayout.propTypes = {
    getRate: PropTypes.func.isRequired,
    getMeters: PropTypes.func.isRequired,
    addressCleanUpNRG: PropTypes.func.isRequired,
    tokenize: PropTypes.func.isRequired,
    getESID: PropTypes.func.isRequired,
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


export default connect(mapStateToProps, {getRate, getMeters, postRegister, addressCleanUpNRG, getESID, tokenize})(RegistrationLayout);