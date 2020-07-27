import React from 'react';

import './Address-List-Item.css';

const AddressListItem = ({meter, setFormData, formData, setMainFormIndex}) =>{

    const confirmHandle = (e) =>{
        e.preventDefault();
        setFormData({...formData, 
            Esiid: meter.Esiid,
            Address1: meter.Address1,
            City: meter.City,
            State: meter.State
        })
        setMainFormIndex(1);
    }
   
    return(
        <div className='ALI'>
            <div className='ALI-col'>
                <div className='ALI-col-one'>
                    <h2>{meter && meter.Address1}</h2>
                </div>
                <div className='ALI-col-two'>
                    <h2>Residential</h2>
                </div>
                <div className='ALI-col-three'> 
                    <h2>{meter && meter.Esiid}</h2>
                </div>
            </div>
            
            <div className='ALI-row'>
                <div className='ALI-confirm-button' onClick={(e) => confirmHandle(e)}>
                    <li >Confirm Address</li>
                </div>
              
            </div>
        </div>
    )
}   


export default AddressListItem;