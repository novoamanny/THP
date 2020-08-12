import {CONTRACT_LENGTH_FILTER_FAIL, CONTRACT_LENGTH_FILTER_SUCCESS, PROVIDER_FILTER_FAIL, PROVIDER_FILTER_SUCCESS} from './types';
import axios from 'axios'

const config ={
    headers: {
        'Content-Type': 'application/json'
    }
}

export const filterByProvider =  (oldFilters, ZipCode) => async dispatch =>{
    const body = JSON.stringify({ ZipCode});
    try{
        const res = await axios.post(`http://localhost:5000/api/rates/get/rates/`, body, config);
        let result;
       
          dispatch({
              type: PROVIDER_FILTER_SUCCESS,
              payload: result
          })
    }
    catch(err){
        const errors = err.response.data.errors;
        
        if (err) {
          // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: PROVIDER_FILTER_FAIL,
            
          });
    }
}