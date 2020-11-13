import React, {useState} from 'react';
import ChangeZipPop from '../Change-ZipCode-Modal/Change-ZipCode-Modal';
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
    // {
    //     label: 'No Contract'
    // },
    // {
    //     label: 'Poor Credit'
    // },
]



const OtherFilters = ({ZipCode, resultCount}) =>{
    const [Pop, setPop] = useState(false);
    const info = {
        count: resultCount,
        ZipCode: ZipCode
    }


    return(
        <div className='Other-Filters'>
            {Pop && <ChangeZipPop setChangeZipModal={setPop}/>} 
            <div className='of-info'>
                <span>{info.count}</span>
                <span>{` electric rates for zipcode `}</span>
                <span>{info.ZipCode}</span>
            </div>
            <div className='RSC-Top-Left-Three of-zipcode-pop' onClick={() => setPop(!Pop)}><span>Change ZipCode</span></div>
            {/* <div className='of-options'>
                {ofData.map(data =>{
                    return <div className='of-option'><span>{data.label}</span></div>
                })}
            </div> */}
        </div>
    )
}

export default OtherFilters;