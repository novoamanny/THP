import React from 'react';

import './Left-Filter-Options-Square.css';

const LeftFilterOptionsSquare = ({data, filterHandle}) =>{
    return(
        <div className='LFOS'>
            <div className='LFOS-Label'>
                <span>{data.label}</span>
            </div>
            <div className='LFOS-options'>
                {data.options.map((option, index) =>{
                    return (
                    <div className='LFOS-option'>
                        <input className='checkbox' type='checkbox' checked={index === 0 && true} onChange={(e) => filterHandle(option, data.label)}/>
                        <span>{option}</span>
                    </div>
                    );
                })}
            </div> 
           
        </div>
    )
}

export default LeftFilterOptionsSquare;