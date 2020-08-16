import React, { Component, useState } from 'react';

import AddressListItem from '../Address-List-Item/Address-List-Item';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';

import './Address-List-Layout.css'

const AddressListLayout = ({meters, setFormData, formData, setMainFormIndex, form}) =>{
   
    const address = form.Address1.split(' ')
    const upperAddress = address[1].toUpperCase();
    console.log(upperAddress)
    

    const match = meters && meters.filter(meter => {
        const tempAddress = meter.Address1.split(' ');
        if(tempAddress[1] === upperAddress){
            return meter;
        }
    })

    return(
        <div className='ALL'>
            <ImportantNoteBox/>
            <div className='best-match-address'>
                {match && <AddressListItem meter={match[0]} setFormData={setFormData} formData={formData} setMainFormIndex={setMainFormIndex}/>}
            </div>
            <div className='ALL-list-layout'>
                {meters && meters.map(meter => <AddressListItem meter={meter} setFormData={setFormData} formData={formData} setMainFormIndex={setMainFormIndex}/>)}
            </div>
        </div>
    )
}

export default AddressListLayout;