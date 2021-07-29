import axios from 'axios';

import {GET_CURRENT_RATES_SUCCESS,GET_RATES_SUCCESS, GET_RATES_FAIL, GET_RATE_FAIL, GET_RATE_SUCCESS} from './types';

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
      const res = await axios.post('http://localhost:8080/api/nrg/rates/getOffers', body, config);

      const response = res.data.filter(offer => offer.offerID === RateID && offer)
     
      dispatch({
        type: GET_RATE_SUCCESS,
        payload: response[0]
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


export const getFilteredRates = (filterOptions, defaultRates) => async dispatch =>{

  try{

    // console.log(defaultRates)
  // console.log(filterOptions)

  // let rates = defaultRates.find((rate) => {
  //   return rate.offerLength === filterOptions.ContractLength[0] && rate
  // });

  // P R O V I D E R

  let roundOne = [];
  
  if(filterOptions.Provider.length !== 0){
    console.log('Provider...')
    filterOptions.Provider.forEach(prov => {
      let temp = defaultRates.filter(rate => rate.brand === prov && rate);
      roundOne = [...roundOne, temp]
    })
  }

  if(roundOne.length === 0){
    roundOne = [...roundOne, defaultRates];
  }

  // console.log(defaultRates)
  let roundTwo = [];

  // Length
  if(filterOptions.ContractLength.length !== 0){
    console.log('Contract')
    filterOptions.ContractLength.forEach(cl => {
      roundOne.forEach(prov =>{
        let temp = prov.filter(rate => rate.offerLength === cl || parseInt(rate.offerLength) === cl && rate)
        roundTwo = [...roundTwo, temp]

        // prov.forEach(item => console.log(item))
        // console.log(prov)
      });
      // console.log(roundOne)
    })
  }

  if(roundTwo.length === 0){
    roundTwo = roundOne;
  }

  // console.log(roundTwo)

  let result = []

  roundTwo.forEach(res => result = result.concat(res))

  console.log(result);

  dispatch({
    type: GET_CURRENT_RATES_SUCCESS,
    payload: result
  });

  }catch (err) {

      const errors = err.response.data.errors;
      
      if (errors) {
        // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
          type: GET_RATES_FAIL,
          
        });

    }
}