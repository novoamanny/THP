import React from 'react';


import './Quick-Filters-Button.css';

const QuickFilterButton = ({data}) =>{
    return(
        <div className='QF-Button'>
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