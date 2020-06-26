import React, {useState} from 'react';

import LeftFilterOptions from '../Left-Filter-Options/Left-Filter-Options';
import QuickFilters from '../Quick-Filters/Quick-FIlters';
import OtherFilters from '../Other-Filters/Other-Filters';
import RatesResultsCard from '../Rates-Results-Card/Rates-Results-Card';

import './FilterLayout.css'



const FilterLayout = ({ZipCode, rates}) =>{

    
    const [filterOptions, setFilterOptions] = useState({
        ContractType: [],
        ContractLength: [],
        Prov: [],
        QuickFilters: 500,
        Other: '',
      })
   const [curentRates, setCurrentRates] = useState([]) 
   
    
    

    const filterHandle = async => (filter, label) =>{
        console.log(filter, label);

        let oldFilters = {...filterOptions};

        let tempFilterList = oldFilters[label]

        const check = tempFilterList.filter(filt => filt === filter && filt)
        
        
        if(check.length > 0){
            let newFilters = tempFilterList.filter(filt => filt !== filter && filt);
            oldFilters[label] = newFilters;
            setFilterOptions({...oldFilters})
        }else{
           
            let newFilters = tempFilterList.concat(filter);
            oldFilters[label] = newFilters;
            setFilterOptions({...oldFilters})
        }
        
    }

    


    
    
     

    return(
        <div className='Filter-Layout'>
           <LeftFilterOptions filterHandle={filterHandle}/>
           <div className='top-filters'>
                <QuickFilters/>
                <OtherFilters/>
           </div>

           <div>
             {console.log(rates)}
           </div>
           
        </div>
    );
}

export default FilterLayout;