import axios from 'axios';


import {GET_METERS_SUCCESS, GET_METERS_FAIL, REGISTER_FAIL, REGISTER_SUCCESS} from './types';


const config = {
    headers: {
        'Content-Type': 'application/json'
    },
}

export const postRegister = (form) => async dispatch =>{
    console.log(form)
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
        SwitchType,
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
        
        const res = await axios.post(`/api/pulse/register/`, body, config);
        
        
        let data = {
            form: form,
            confirmation: res.data
        };
        dispatch({

            type: REGISTER_SUCCESS,
            payload: data
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

        const res = await axios.post(`/api/pulse/register/get/meters`, body, config);
        console.log(res)
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