import axios from 'axios';

import {GET_RATES_SUCCESS, GET_RATES_FAIL, GET_RATE_FAIL, GET_RATE_SUCCESS} from './types';

const config = {
    headers: {
        'Content-Type': 'application/json'
    },
}

export const setCurrentRates = () => {

}

export const getRates = (ZipCode, filterOptions) => async dispatch =>{

    const body = JSON.stringify({ ZipCode});
    

    try {

      // PULSE
        const res = await axios.post(`http://localhost:8080/api/pulse/rates/getOffers/`, body, config);

      // NRG
        const res2 = await axios.post('http://localhost:8080/api/nrg/rates/getOffers', body, config);

        const result = [...res.data, ...res2.data];
        // const result = res.data
        console.log(result);
          
        dispatch({
          type: GET_RATES_SUCCESS,
          payload: result
        });
     
      } catch (err) {
  
        const errors = err.response.data.errors;
        
        if (err) {
          // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: GET_RATES_FAIL,
            
          });

      }
}

export const getRate = (RateID, Provider, ZipCode, campaignCode) => async dispatch =>{
  
  const body = JSON.stringify({ ZipCode, Provider, RateID, campaignCode});
  
  try {
    if(Provider === 'Pulse'){
      const res = await axios.post(`http://localhost:8080/api/pulse/rates/getOffer/`, body, config);
      
      dispatch({
        type: GET_RATE_SUCCESS,
        payload: res.data
      });
    } else{
      const res = await axios.post(`http://localhost:8080/api/nrg/rates/getOffer/`, body, config);
      console.log(res.data)
      dispatch({
        type: GET_RATE_SUCCESS,
        payload: res.data
      });
    }
      
  
   
    } catch (err) {

      const errors = err.response.data.errors;
      
      if (errors) {
        // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
          type: GET_RATE_FAIL,
          
        });

    }
}


