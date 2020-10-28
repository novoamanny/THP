import React, {useState} from 'react';


import LeftFilterOptions from '../Left-Filter-Options/Left-Filter-Options';
import QuickFilters from '../Quick-Filters/Quick-FIlters';
import OtherFilters from '../Other-Filters/Other-Filters';
import RatesResultsCard from '../Rates-Results-Card/Rates-Results-Card';


import FeaturedRatesSection from '../Featured-Rates-Section/Featured-Rates-Section';
import RatesResultsSection from '../Rates-Results-Section/Rates-Results-Section';

import './FilterLayout.css';
import Navbar from '../Navbar/Navbar';


const FilterLayout = ({ZipCode, rates, getRates, filterByProvider, loading}) =>{

    
    const [filterOptions, setFilterOptions] = useState({
        ContractType: [],
        ContractLength: [],
        Prov: [],
        Other: '',
    })


    const [currentZipCode, setCurrentZipCode] = useState(ZipCode)
    const [quickFilters, setQuickFilters] = useState(500);
    // const [currentRates, setCurrentRates] = useState([]);
    const [mobileSlide, setMobileSlide] = useState(false);



    const Filter = (oldFilters, label) =>{
        if(label === 'ContractLength'){
            console.log('oof')
        }
        if(label === 'Prov'){
            filterByProvider(oldFilters, ZipCode)
        }
    }

      // FIlter Handle
    const filterHandle = (label, value) =>{
        

        let oldFilters = {...filterOptions};

        let tempFilterList = oldFilters[label]

        const check = tempFilterList.filter(filt => filt === value && filt)
        
        if(value === 'none'){
            let newFilters = [];
            oldFilters[label] = newFilters;
            setFilterOptions({...oldFilters});
        }
        else{
            if(check.length > 0){
                let newFilters = tempFilterList.filter(filt => filt !== value && filt);
                oldFilters[label] = newFilters;
                setFilterOptions({...oldFilters})
            }else{
               
                let newFilters = tempFilterList.concat(value);
                oldFilters[label] = newFilters;
                setFilterOptions({...oldFilters})
            }
        }

        
        // getRates(ZipCode, oldFilters, label,)
        
    }
   
  
  
    let temp;
    
    let Data = [];
   
    if(!loading && rates){
        rates.forEach(prov => {
                
        
            console.log(prov)
            prov.data && prov.data.forEach(rate => {
                
                temp = {
                    provider: prov.name,
                    rateData: rate
                };
                
                Data = Data.concat(temp);
                
            })
            
        })
}
    

  

    

    

// Result Data

   const result = Data;
   

    const resultCount = result.length
    

    
    console.log(mobileSlide)
     

    return(
        <div className='Filter-Layout'>
            
           <LeftFilterOptions filterOptions={filterOptions} filterHandle={filterHandle}/>
           <div className='top-filters'>
                <QuickFilters setQuickFilters={setQuickFilters} quickFilters={quickFilters}/>
                <OtherFilters rates={rates} ZipCode={currentZipCode} resultCount={resultCount}/>
           </div>
           <div className='filters-mobile' >
           {/* <div className={mobileSlide && 'mobile-backdrop'}></div> */}
                {/* <div className='filter-mobile-button' onClick={() => setMobileSlide(!mobileSlide)}>
                    <span>Search Filters</span>
                </div> */}
                <div className={!mobileSlide ? 'filter-mobile-not-active' : 'filter-mobile-active'}>
                
                    <div className={!mobileSlide ? 'filter-mobile-ui-not-active' : 'filter-mobile-ui-active'}>
                        <QuickFilters setQuickFilters={setQuickFilters} quickFilters={quickFilters}/>
                        <div className='mobile-ui-options'>
                            
                            <div className='left-mobile-options'>
                            <div className='mobile-ui-labels'>
                                <span>Contract Length</span>
                            </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>Show All</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>Monthly / No Contract</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>12 Months</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>18 Months</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>24 Months</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>36 Months</li>
                                </div>
                                
                            </div>
                            <div className='right-mobile-options'>
                            <div className='mobile-ui-labels'>
                                <span>Provider</span>
                            </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>Pulse</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>Reliant</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>Green Mountain</li>
                                </div>
                                
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>Cirro</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>Pennywise</li>
                                </div>
                                <div className='mobile-option'>
                                    <div className='mobile-option-checkbox'>

                                    </div>
                                    <li>Everything Energy</li>
                                </div>
                            </div>
                        </div>
                        <div className='hide-filters'>
                            <div className='hide-filters-button' onClick={() => setMobileSlide(!mobileSlide)}>
                                <span>Hide Filters</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
           </div>
           
            <div>
            <FeaturedRatesSection watt={quickFilters} ZipCode={currentZipCode} resultData={result}/>
            </div>
           <div>
            
             <RatesResultsSection resultData={result} quickFilters={quickFilters} ZipCode={currentZipCode}/>
           </div>
           
        </div>
    );
}

export default FilterLayout;