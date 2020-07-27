import React, {useState} from 'react';

import LeftFilterOptions from '../Left-Filter-Options/Left-Filter-Options';
import QuickFilters from '../Quick-Filters/Quick-FIlters';
import OtherFilters from '../Other-Filters/Other-Filters';
import RatesResultsCard from '../Rates-Results-Card/Rates-Results-Card';


import FeaturedRatesSection from '../Featured-Rates-Section/Featured-Rates-Section';
import RatesResultsSection from '../Rates-Results-Section/Rates-Results-Section';

import './FilterLayout.css';


const FilterLayout = ({ZipCode, rates, getRates}) =>{

    
    const [filterOptions, setFilterOptions] = useState({
        ContractType: [],
        ContractLength: [],
        Prov: [],
        Other: '',
    })


    const [currentZipCode, setCurrentZipCode] = useState(ZipCode)
    const [quickFilters, setQuickFilters] = useState(500);
    const [currentRates, setCurrentRates] = useState([]);





      // FIlter Handle
    const filterHandle = async (label, value) =>{
        

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

        
        await getRates(ZipCode, oldFilters)
        
    }
   
    const RATES = rates;


    let firstFilterData = [];
    let secondFilterData = [];
    let noFilterData = [];
    let finalResultCheckData;
    let temp;
    let count;
   

   
    

    if(filterOptions.ContractLength.length == 0 && filterOptions.Prov.length == 0 || filterOptions.Prov.length > 0 && filterOptions.ContractLength == 0){
        let list = [];
       

        RATES && RATES.forEach(prov => {
            
        

            prov.data.forEach(rate => {
                
                temp = {
                    provider: prov.name,
                    rateData: rate
                };
                console.log(temp)
                 noFilterData = noFilterData.concat(temp);
                
            })
            
        })

       
    }
    if(filterOptions.ContractLength.length > 0){
        const filteredRates = RATES && RATES;
        filteredRates.forEach(rate => {
            temp = {
                provider: rate.name,
                rateData: rate.data
            };

            noFilterData = noFilterData.concat(temp);            
        })

     

    }

    finalResultCheckData = noFilterData;
  

    

// Result Data

   
    const resultData =  finalResultCheckData;
    const resultCount = count && count;

    
    
     

    return(
        <div className='Filter-Layout'>
           <LeftFilterOptions filterHandle={filterHandle}/>
           <div className='top-filters'>
                <QuickFilters setQuickFilters={setQuickFilters} quickFilters={quickFilters}/>
                <OtherFilters rates={rates} ZipCode={currentZipCode} resultCount={resultCount}/>
           </div>
            <div>
            <FeaturedRatesSection ZipCode={currentZipCode} resultData={resultData}/>
            </div>
           <div>
            
             <RatesResultsSection resultData={resultData} quickFilters={quickFilters} ZipCode={currentZipCode}/>
           </div>
           
        </div>
    );
}

export default FilterLayout;