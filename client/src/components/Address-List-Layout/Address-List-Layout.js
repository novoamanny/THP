import React from 'react';

import AddressListItem from '../Address-List-Item/Address-List-Item';

import './Address-List-Layout.css'

const AddressListLayout = ({meters}) =>{
    return(
        <div className='ALL'>
            <div>

            </div>
            <div className='ALL-list-layout'>
                {meters && meters.map(meter => <AddressListItem meter={meter}/>)}
            </div>
        </div>
    )
}

export default AddressListLayout;