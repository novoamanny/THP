import React, { Component, useState } from 'react';

import AddressListItem from '../Address-List-Item/Address-List-Item';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';

import './Address-List-Layout.css'

const AddressListLayout = ({getESID, ACU, meters, setFormData, formData, setMainFormIndex, form}) =>{
   
    const address = form.Address1 && form.Address1.split(' ')
    const upperAddress = address && address[1].toUpperCase();
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
                <div className='best-match-title'>
                    <span>Best Match</span>
                </div>
                {match && <AddressListItem getESID={getESID} ACU={ACU} meter={match[0]} setFormData={setFormData} formData={formData} setMainFormIndex={setMainFormIndex}/>}
            </div>
            <div className='ALL-list-layout'>
                <div className='best-match-title'>
                    <span>Address List</span>
                </div>
                {meters && meters.map(meter => <AddressListItem getESID={getESID} ACU={ACU} meter={meter} setFormData={setFormData} formData={formData} setMainFormIndex={setMainFormIndex}/>)}
            </div>
        </div>
    )
}

export default AddressListLayout;