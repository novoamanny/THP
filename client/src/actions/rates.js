import axios from 'axios';

import {GET_RATES_SUCCESS, GET_RATES_FAIL} from './types';

const config = {
    headers: {
        'Content-Type': 'application/json'
    },
}


export const getRates = (ZipCode) => async dispatch =>{

    const body = JSON.stringify({ ZipCode: ZipCode});

    try {
        const res = await axios.post('http://localhost:5000/api/rates/get/rates/', body, config);
          
        dispatch({
          type: GET_RATES_SUCCESS,
          payload: res.data
        });
    
     
      } catch (err) {
  
        const errors = err.response.data.errors;
        
        if (errors) {
          // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: GET_RATES_FAIL,
            
          });

      }
}


