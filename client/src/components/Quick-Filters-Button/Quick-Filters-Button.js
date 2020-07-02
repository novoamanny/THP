import React from 'react';


import './Quick-Filters-Button.css';

const QuickFilterButton = ({data, setQuickFilters, quickFilters}) =>{
    return(
        <div className={`QF-Button ${data.kwh === quickFilters && 'active'}`} onClick={() => setQuickFilters(data.kwh)}>
            <div className='QF-Button-label'>
                <span>{data.label}</span>
            </div>
            <div className='QF-Button-details'>
                <span>{`${data.kwh} KWH`}</span>
            </div>
        </div>
    )
}


export default QuickFilterButton;