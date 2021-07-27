import axios from 'axios';

// N E E D  T O  A D D  N O T I F I C A T I O N S  /  A L E R T S
import {GET_METERS_SUCCESS, GET_METERS_FAIL, REGISTER_FAIL, REGISTER_SUCCESS} from './types';


const config = {
    headers: {
        'Content-Type': 'application/json'
    },
}

export const postRegister = (form) => async dispatch =>{
    
    // Need to clean up and separate model
    const {
        EmailAddress,
        FirstName,
        LastName,
        Phone,
        Address1,
        City,
        State,
        SwitchType,
        SSN,
        RateID,
        Rate,
        ZipCode,
        Provider,
        Esiid,
        ROUTE,
        Date
    } = form;
    const body = JSON.stringify({
        EmailAddress,
        FirstName,
        LastName,
        Phone,
        Address1,
        City,
        State,
        SwitchType: 'Switching',
        SSN,
        RateID,
        Rate,
        ZipCode,
        Provider,
        Esiid,
        ROUTE,
        RequestedDate: Date
    });
    
        
    try{
        
        const res = await axios.post(`http://localhost:8080/api/pulse/register/`, body, config);
        
        
        let data = {
            form: form,
            confirmation: res.data
        };
        dispatch({

            type: REGISTER_SUCCESS,
            payload: res.data
        })
        
    }catch(err){

        const errors = err.response.data.errors;
      
        if (err) {
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
        type: REGISTER_FAIL,
        payload: err.errors
        });
    }
}


export const getMeters = (form) => async dispatch =>{
    const body = JSON.stringify({Address1: form.Address1, ZipCode: form.ZipCode, Provider: form.Provider});

    try{

        const res = await axios.post(`http://localhost:8080/api/pulse/register/get/meters`, body, config);
       
        dispatch({

            type: GET_METERS_SUCCESS,
            payload: res.data
        })
        
        return res.data;
    }catch(err){

        const errors = err.response.data.errors;
      
        if (err) {
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
        type: GET_METERS_FAIL,
        
        });
    }
}


export const addressCleanUpNRG = (Address) => async dispatch =>{
    
    const body = JSON.stringify({Address});

    try{
        const res = await axios.post('http://localhost:8080/api/nrg/register/addressCleanUp/', body, config);
        const response = res.data;
        return response;
    }catch(err){

        const errors = err.response.data.errors;
      
        if (err) {
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
        type: GET_METERS_FAIL,
        
        });
    }
}

export const getESID = (Address, brand, zipCode) => async dispatch =>{

    

    const body = JSON.stringify({Address, brand, zipCode});

    try{
        const res = await axios.post('http://localhost:8080/api/nrg/register/getESID/', body, config);
        const response = res.data;
        return response;
    }catch(err){

        const errors = err.response.data.errors;
      
        if (err) {
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
        type: GET_METERS_FAIL,
        
        });
    }
}