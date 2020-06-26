import React from 'react';

import LeftFilterOptionsSquare from '../Left-Filter-Options-Square/Left-Filter-Options-Square';
import './Left-Filter-Options.css';


const LFOSData = [
    {
        label: 'ContractType',
        options: [
            'Show All',
            'No Deposit / Poor Credit',
            'No Contract'
        ]
    },
    {
        label: 'ContractLength',
        options: [
            'Show All',
            'Monthly / No Contract',
            '12 Months',
            '18 Months',
            '24 Months',
            '36 Months',
        ]
    },
    {
        label: 'Prov',
        options: [
            'Show All',
            'Provider 1',
            'Provider 2',
            'Provider 3',
            'Provider 4',
            'Provider 5',
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
                {LFOSData.map(data =>{
                    return <LeftFilterOptionsSquare data={data} filterHandle={filterHandle}/>
                })} 
            </div>
                      
        </div>
    )
}

export default LeftFilterOptions;