import React from 'react';

import AddressListItem from '../Address-List-Item/Address-List-Item';
import ImportantNoteBox from '../Important-Note-Box/Important-Note-Box';

import './Address-List-Layout.css'

const AddressListLayout = ({meters, setFormData, formData, setMainFormIndex}) =>{
    return(
        <div className='ALL'>
            <ImportantNoteBox/>
            <div>

            </div>
            <div className='ALL-list-layout'>
                {meters && meters.map(meter => <AddressListItem meter={meter} setFormData={setFormData} formData={formData} setMainFormIndex={setMainFormIndex}/>)}
            </div>
        </div>
    )
}

export default AddressListLayout;