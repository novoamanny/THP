import React from 'react';

import QuickFiltersButton from '../Quick-Filters-Button/Quick-Filters-Button';

import './Quick-Filters.css'

const qfData = [
    {
        label: 'Apartment',
        kwh: 500
    },
    {
        label: 'Small Home',
        kwh: 1000
    },
    {
        label: 'Large Home',
        kwh: 2000
    },
    {
        label: 'Your Home',
        kwh: '_____'
    },
]

const QuickFilters = ({setQuickFilters, quickFilters}) =>{
    return(
        <div className='Quick-Filter'>
            <div className='qf-title'>
                <h2>Quick Filters</h2> 
            </div>
            <div className='qf-options'>
                {qfData.map((data, index) =>{
                    return <div key={index} className='qf-option'><QuickFiltersButton data={data} setQuickFilters={setQuickFilters} quickFilters={quickFilters}/></div>
                })}
            </div>
        </div>
    )
}

export default QuickFilters;