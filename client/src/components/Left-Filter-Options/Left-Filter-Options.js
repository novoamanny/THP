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
            'none',
            12,
            18,
            24,
            36
        ]
    },
    {
        label: 'Prov',
        options: [
            'Show All',
            'Pulse',
            'Energy To Go',
            'Lonestar',
            'New Power',
            'Power Next',
        ],
        value: [
            'none',
            'pulse',
            'etg',
            'lonestar',
            'newpower',
            'powernext'
        ]
    },
]


const LeftFilterOptions = ({filterHandle}) =>{
    return (
        <div className='Left-Filter-Options'>
            <div className='LFOS-title'>
                <span>Search FIlters</span>
            </div>
            <div className='LFOS-sq'>
                {LFOSData.map((data, index) =>{
                    return <LeftFilterOptionsSquare data={data} index={index} filterHandle={filterHandle}/>
                })} 
            </div>
                      
        </div>
    )
}

export default LeftFilterOptions;