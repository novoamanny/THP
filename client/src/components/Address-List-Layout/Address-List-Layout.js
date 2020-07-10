import React from 'react';

import AddressListItem from '../Address-List-Item/Address-List-Item';

import './Address-List-Layout.css'

const AddressListLayout = ({meters, setFormData, formData}) =>{
    return(
        <div className='ALL'>
            <div>

            </div>
            <div className='ALL-list-layout'>
                {meters && meters.map(meter => <AddressListItem meter={meter} setFormData={setFormData} formData={formData}/>)}
            </div>
        </div>
    )
}

export default AddressListLayout;