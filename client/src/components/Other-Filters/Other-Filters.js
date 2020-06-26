import React from 'react';

import './Other-Filters.css';

const ofData = [
    {
        label: 'All Plans'
    },
    {
        label: 'Long Term'
    },
    {
        label: '100% Green Energy'
    },
    {
        label: 'No Contract'
    },
    {
        label: 'Poor Credit'
    },
]



const OtherFilters = () =>{

    const info = {
        count: 0,
        ZipCode: '75217'
    }


    return(
        <div className='Other-Filters'>
            <div className='of-info'>
                <span>{`${info.count} electric rates for zipcode ${info.ZipCode}`}</span>
            </div>
            <div className='of-options'>
                {ofData.map(data =>{
                    return <div className='of-option'><span>{data.label}</span></div>
                })}
            </div>
        </div>
    )
}

export default OtherFilters;