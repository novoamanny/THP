import React from 'react';

import './Address-List-Item.css';

const AddressListItem = ({getESID, ACU, meter, setFormData, formData, setMainFormIndex}) =>{

    const confirmHandle = async (e) =>{
        e.preventDefault();
        if(formData.Provider === 'Pulse'){
            setFormData({...formData, 
                Esiid: meter.Esiid,
                Address1: meter.Address1,
                City: meter.City,
                State: meter.State
            })
        }else{
          
            var address =  meter.Address1;
            var split = address.split(" ");
            var number = split[0];
            var name = split[1];
            for (var i = 2; i < split.length - 1; i++)
                name += " " + split[i];
            var type = split[split.length - 1];

          
            const Address = {
                streetNum: number,
                streetName: name,
                city: meter.City,
                state: meter.State,
                zipCode: formData.ZipCode,
                brand: formData.Provider
            }
            const a = await ACU(Address)
            const b = await getESID(a, formData.Provider, formData.ZipCode)

            setFormData({...formData, 
                Esiid: b.esidNumber,
                Address1: meter.Address1,
                AddressNRG: {...a},
                ESIDNRG: {...b},
                City: meter.City,
                State: meter.State
            })
        }
        
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