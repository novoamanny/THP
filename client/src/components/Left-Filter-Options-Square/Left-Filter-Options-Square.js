import React from 'react';

import './Left-Filter-Options-Square.css';

const LeftFilterOptionsSquare = ({filterOptions, data, index, filterHandle}) =>{
    return(
        <div className={`LFOS LFOS-${index}`}>
            <div className='LFOS-Label'>
                <span>{data.label}</span>
            </div>
            <div className='LFOS-options'>
                {data.options.map((option, i) =>{
                    
                    return (
                    <div key={option} id={option} className='LFOS-option'>
                        <div className='checkbox'  onClick={(e) => filterHandle(data.label, data.value[i], data.indexFilter[i])}>
                            <div id={`${data.indexFilter[i]}-filter`}  className={data.indexFilter[i] === 0 ? 'checkbox-square checked' : 'checkbox-square'}>

                            </div>
                            <div className=''>
                                <span>{option}</span>
                            </div>

                        
                        </div>
                    </div>
                    );
                })}
            </div> 
           
        </div>
    )
}

export default LeftFilterOptionsSquare;