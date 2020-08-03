import axios from 'axios';

import {GET_RATES_SUCCESS, GET_RATES_FAIL, GET_RATE_FAIL, GET_RATE_SUCCESS} from './types';

const config = {
    headers: {
        'Content-Type': 'application/json'
    },
}


export const getRates = (ZipCode, filterOptions) => async dispatch =>{

    const body = JSON.stringify({ ZipCode});
    console.log(filterOptions)

    try {
        const res = await axios.post(`/api/rates/get/rates/`, body, config);

        
        var result;
        if(filterOptions){
          if(filterOptions.Prov.length > 0){
            let filterProv = [];

            filterOptions.Prov.forEach(op => {

              res.data.forEach(prov => {
                if(op === prov.name){
                  filterProv = filterProv.concat(prov);
                  
                }
              });
            })
            
           result = filterProv;
          }

          if(filterOptions.ContractLength.length > 0){
            let filterLength = [];

            if(filterOptions.Prov.length > 0){
              filterOptions.ContractLength.forEach(op => {

                result.forEach(prov => {
                  prov.data.forEach(rate => {
                    if( op === rate.Term){
                      let temp = {
                        name: prov.name,
                        data: rate
                      }
                      filterLength = filterLength.concat(temp);
                      
                    }
                  })
                });
              })
            }
            

            if(filterOptions.Prov.length === 0){

              filterOptions.ContractLength.forEach(op => {

                res.data.forEach(prov => {
                  
                  prov.data.forEach(rate => {
                    if( op === rate.Term){
                      let temp = {
                        name: prov.name,
                        data: rate
                      }
                      filterLength = filterLength.concat(temp);
                      
                    }
                  })
                });
              })
            }
            
           result = filterLength;
          }



          if(filterOptions.Prov.length === 0 && filterOptions.ContractLength.length === 0){
            result = res.data
          }
        }
        else{
          result = res.data
        }
        
        console.log(result)
        
          
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

export const getRate = (RateID, Provider, ZipCode) => async dispatch =>{

  const body = JSON.stringify({ ZipCode, Provider, RateID});

  try {
      const res = await axios.post(`/api/rates/get/rate/${RateID}`, body, config);
       
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


