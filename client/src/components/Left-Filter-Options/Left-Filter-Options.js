import React from 'react';

import LeftFilterOptionsSquare from '../Left-Filter-Options-Square/Left-Filter-Options-Square';
import './Left-Filter-Options.css';


const LFOSData = [
    // {
    //     label: 'ContractType',
    //     options: [
    //         'Show All',
    //         'No Deposit / Poor Credit',
    //         'No Contract'
    //     ]
    // },
    {
        label: 'ContractLength',
        options: [
            'Show All',
            'Monthly / No Contract',
            '12 Months',
            '18 Months',
            '24 Months',
            '36 Months',
        ],
        value: [
            'none',
            'No Contract',
            12,
            18,
            24,
            36
        ],
       indexFilter:[
           0,
           1,
           2,
           3,
           4,
           5
       ]
    },
    {
        label: 'Provider',
        options: [
            // 'Show All',
            'Pulse',
            'Reliant',
            'Green Mountain',
            'Cirro',
            'Discount Power',
            // 'Everything Energy',
        ],
        value: [
            // 'none',
            'Pulse',
            'Reliant',
            'Green Mountain',
            'Cirro',
            'Discount Power',
            // 'Everything Energy'
        ],
        indexFilter:[
            6,
            7,
            8,
            9,
            10,
            // 11
        ]
    },
]


const LeftFilterOptions = ({filterOptions,filterHandle}) =>{
    return (
        <div className='Left-Filter-Options'>
            <div className='LFOS-title'>
                <span>Search Filters</span>
            </div>
            <div className='LFOS-sq'>
                {LFOSData.map((data, index) =>{
                    return <LeftFilterOptionsSquare filterOptions={filterOptions} data={data} index={index} filterHandle={filterHandle}/>
                })} 
            </div>
                      
        </div>
    )
}

export default LeftFilterOptions;