import React, {useState} from 'react';

import LeftFilterOptions from '../Left-Filter-Options/Left-Filter-Options';
import QuickFilters from '../Quick-Filters/Quick-FIlters';
import OtherFilters from '../Other-Filters/Other-Filters';
import RatesResultsCard from '../Rates-Results-Card/Rates-Results-Card';


import FeaturedRatesSection from '../Featured-Rates-Section/Featured-Rates-Section';
import RatesResultsSection from '../Rates-Results-Section/Rates-Results-Section';

import './FilterLayout.css';

const FilterLayout = ({ZipCode, rates}) =>{

    
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
    const filterHandle = (label, value) =>{
        

        let oldFilters = {...filterOptions};

        let tempFilterList = oldFilters[label]

        const check = tempFilterList.filter(filt => filt === value && filt)
        
        
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
   
    const RATES = rates[0];


    let firstFilterData = [];
    let secondFilterData = [];
    let noFilterData = [];
    let finalResultCheckData;
    let temp;

    let count = 0;

     RATES && RATES.forEach(prov => {
        count = count + prov.data.length;
        
    });

    

// Check Providers
    if(filterOptions.Prov.length > 0){
        console.log(filterOptions)

        filterOptions.Prov.forEach(element => {
            
            RATES && RATES.forEach(prov =>{
                
                if(element === prov.name){
                    temp = prov.data.map(rate =>{
                        return{
                            provider: prov.name,
                            rateData: rate
                        }
                    })
                    

                    firstFilterData = temp;
                    
                 }
            })


           
            
        });
    }


// Check Contract Length
    if(filterOptions.ContractLength.length > 0){
       


        if(firstFilterData.length > 0){
            filterOptions.ContractLength.forEach(element => {


                 firstFilterData.forEach(rate =>{
                     

                        if(element === rate.Term){

                            temp = {
                                provider: rate.provider,
                                rateData: rate
                            };

                            secondFilterData = secondFilterData.concat(temp)
                             
                        }
                    
                })
                
            });
        }


        if(firstFilterData.length == 0){
            filterOptions.ContractLength.forEach(element => {


                RATES && RATES.forEach(prov =>{
                
                    prov.data.forEach(rate =>{
                        if(element === rate.Term){

                            temp = {
                                provider: prov.name,
                                rateData: rate
                            };
                            secondFilterData = secondFilterData.concat(temp)
                           
                        }
                    })
                    
                })
                
            });
        }


        
    }


    // if(filterOptions.ContractType.length > 0){
    //     console.log('Contract Type');
    // }
    
// No Filter Data
    if(firstFilterData.length == 0 && secondFilterData.length == 0){
        let list = [];
       

        RATES && RATES.forEach(prov => {
            
        

            prov.data.forEach(rate => {
                
                temp = {
                    provider: prov.name,
                    rateData: rate
                };

                 noFilterData = noFilterData.concat(temp);
                
            })
            
        })

       
    }


    finalResultCheckData = noFilterData;

   

    if(noFilterData.length == 0){
        finalResultCheckData = firstFilterData;
    }



   

    

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