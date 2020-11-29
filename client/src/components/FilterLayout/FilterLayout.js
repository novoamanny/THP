import React, {useState} from 'react';


import LeftFilterOptions from '../Left-Filter-Options/Left-Filter-Options';
import QuickFilters from '../Quick-Filters/Quick-FIlters';
import OtherFilters from '../Other-Filters/Other-Filters';
import Footer from '../Footer/Footer';


import FeaturedRatesSection from '../Featured-Rates-Section/Featured-Rates-Section';
import RatesResultsSection from '../Rates-Results-Section/Rates-Results-Section';

import './FilterLayout.css';
import Navbar from '../Navbar/Navbar';


const FilterLayout = ({ZipCode, rates, getRates, filterByProvider, loading, mobileSlide, setMobileSlide}) =>{

    
    const [filterOptions, setFilterOptions] = useState({
        ContractType: [],
        ContractLength: [],
        Prov: [],
        Other: '',
    })


    const [currentZipCode, setCurrentZipCode] = useState(ZipCode)
    const [quickFilters, setQuickFilters] = useState(500);
    // const [currentRates, setCurrentRates] = useState([]);
   

      // FIlter Handle
    const filterHandle = (label, value, indexFilter) =>{
        
        let i = 1;
        if(indexFilter === 0){
            if(!document.getElementById(`${0}-filter`).classList.contains('checked')){
                document.getElementById(`${0}-filter`).classList.add('checked');
                document.getElementById(`${0}-mobile`).classList.add('checked');
            }
            while(i < 12){
                
                if(document.getElementById(`${i}-filter`).classList.contains('checked')){
                    document.getElementById(`${i}-filter`).classList.remove('checked');
                    document.getElementById(`${i}-mobile`).classList.remove('checked');
                    i = i + 1;
                }
                else{
                    i = i + 1;
                }
            }
        }
        else{
           if(document.getElementById(`${0}-filter`).classList.contains('checked')){
               document.getElementById(`${0}-filter`).classList.remove('checked');
               document.getElementById(`${0}-mobile`).classList.remove('checked');
           }
           if(document.getElementById(`${indexFilter}-filter`).classList.contains('checked')){
                document.getElementById(`${indexFilter}-filter`).classList.remove('checked');
                document.getElementById(`${indexFilter}-mobile`).classList.remove('checked');
           }
           else{
                document.getElementById(`${indexFilter}-filter`).classList.add('checked');
                document.getElementById(`${indexFilter}-mobile`).classList.add('checked');
           }
        }


        // let oldFilters = {...filterOptions};

        // let tempFilterList = oldFilters[label]

        // const check = tempFilterList.filter(filt => filt === value && filt)
        
        // if(value === 'none'){
        //     let newFilters = [];
        //     oldFilters[label] = newFilters;
        //     setFilterOptions({...oldFilters});
        // }
        // else{
        //     if(check.length > 0){
        //         let newFilters = tempFilterList.filter(filt => filt !== value && filt);
        //         oldFilters[label] = newFilters;
        //         setFilterOptions({...oldFilters})
        //     }else{
               
        //         let newFilters = tempFilterList.concat(value);
        //         oldFilters[label] = newFilters;
        //         setFilterOptions({...oldFilters})
        //     }
        // }

        
        // getRates(ZipCode, oldFilters, label,)
        
    }
   
  
  
    let temp;
    
    let Data = [];
   
    if(!loading && rates){
        rates.forEach(prov => {
                
        
            
            prov.data && prov.data.forEach(rate => {
                
                temp = {
                    provider: prov.name,
                    rateData: rate,
                    PUCT: prov.PUCT,
                    Phone: prov.Phone
                    
                };
                
                Data = Data.concat(temp);
                
            })
            
        })
}
    

  

    

    

// Result Data

   const result = Data;
   

    const resultCount = result.length
    

    
    
     

    return(
        <div className='Filter-Layout'>
            
           <LeftFilterOptions filterOptions={filterOptions} filterHandle={filterHandle}/>
           <div className='top-filters'>
                {/* <QuickFilters setQuickFilters={setQuickFilters} quickFilters={quickFilters}/> */}
                <OtherFilters rates={rates} ZipCode={currentZipCode} resultCount={resultCount}/>
           </div>
           <div className='filters-mobile' >
           {/* <div className={mobileSlide && 'mobile-backdrop'}></div> */}
                {/* <div className='filter-mobile-button' onClick={() => setMobileSlide(!mobileSlide)}>
                    <span>Search Filters</span>
                </div> */}
                <div className={!mobileSlide ? 'filter-mobile-not-active' : 'mobile-backdrop'}></div>
                <div className={!mobileSlide ? 'filter-mobile-not-active' : 'filter-mobile-active'}>
                
                    <div className={!mobileSlide ? 'filter-mobile-ui-not-active' : 'filter-mobile-ui-active'}>
                        {/* <QuickFilters setQuickFilters={setQuickFilters} quickFilters={quickFilters}/> */}
                        <OtherFilters rates={rates} ZipCode={currentZipCode} resultCount={resultCount}/>
                        <div className='mobile-ui-options'>
                            
                            <div className='left-mobile-options'>
                            <div className='mobile-ui-labels'>
                                <span>Contract Length</span>
                            </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Contract Length', 'All Length', 0)}>
                                    <div id={`${0}-mobile`} className='mobile-option-checkbox checked'>

                                    </div>
                                    <li>Show All</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Contract Length', 'Monthly / No Contract', 1)}>
                                    <div id={`${1}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>Monthly / No Contract</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Contract Length', 12, 2)}>
                                    <div id={`${2}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>12 Months</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Contract Length', 18, 3)}>
                                    <div id={`${3}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>18 Months</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Contract Length', 24, 4)}>
                                    <div id={`${4}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>24 Months</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Contract Length', 36, 5)}>
                                    <div id={`${5}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>36 Months</li>
                                </div>
                                
                            </div>
                            <div className='right-mobile-options'>
                            <div className='mobile-ui-labels'>
                                <span>Provider</span>
                            </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Provider', 'Pulse', 6)}>
                                    <div id={`${6}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>Pulse</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Provider', 'Reliant', 7)}>
                                    <div id={`${7}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>Reliant</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Provider', 'Green Mountain', 8)}>
                                    <div id={`${8}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>Green Mountain</li>
                                </div>
                                
                                <div className='mobile-option' onClick={(e) => filterHandle('Provider', 'Cirro', 9)}>
                                    <div id={`${9}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>Cirro</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Provider', 'Pennywise', 10)}> 
                                    <div id={`${10}-mobile`}  className='mobile-option-checkbox'>

                                    </div>
                                    <li>Pennywise</li>
                                </div>
                                <div className='mobile-option' onClick={(e) => filterHandle('Provider', 'Everything Energy', 11)}>
                                    <div id={`${11}-mobile`}  className='mobile-option-checkbox'>

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
            
             <RatesResultsSection resultData={result} watt={quickFilters} ZipCode={currentZipCode}/>
           </div>
           <div className='footer'>
           <Footer/>
           </div>
           
           
        </div>
    );
}

export default FilterLayout;