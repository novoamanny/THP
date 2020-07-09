import React from 'react';

import './Address-List-Item.css';

const AddressListItem = ({meter}) =>{
    console.log(meter)
    return(
        <div className='ALI'>
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
    )
}   


export default AddressListItem;