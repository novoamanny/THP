import React from 'react';

import QuickFiltersButton from '../Quick-Filters-Button/Quick-Filters-Button';

import './Quick-Filters.css'

const qfData = [
    {
        label: 'Apartment',
        kwh: '500'
    },
    {
        label: 'Small Home',
        kwh: '1000'
    },
    {
        label: 'Large Home',
        kwh: '2000'
    },
    {
        label: 'Your Home',
        kwh: '?'
    },
]

const QuickFilters = () =>{
    return(
        <div className='Quick-Filter'>
            <div className='qf-title'>
                <span>Quick Filter</span>
            </div>
            <div className='qf-options'>
                {qfData.map(data =>{
                    return <QuickFiltersButton data={data}/>
                })}
            </div>
        </div>
    )
}

export default QuickFilters;