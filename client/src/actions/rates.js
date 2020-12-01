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
        const res = await axios.post(`/api/pulse/rates/get/rates/`, body, config);

          
        dispatch({
          type: GET_RATES_SUCCESS,
          payload: res.data
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

export const getRate = (RateID, Provider, ZipCode) => async dispatch =>{
  
  const body = JSON.stringify({ ZipCode, Provider, RateID});

  try {
      const res = await axios.post(`api/pulse/rates/get/rate/${RateID}`, body, config);
       
      dispatch({
        type: GET_RATE_SUCCESS,
        payload: res.data
      });
  
   
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


