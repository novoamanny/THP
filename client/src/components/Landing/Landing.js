import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FilterLayout from '../FilterLayout/FilterLayout';

import {getRates} from '../../actions/rates';
import {filterByProvider} from '../../actions/filter';

const Landing = ({match, getRates, filterByProvider, rates:{rates, currentRates, loading}}) =>{
    
    const [ZipCode, SetZipCode] = useState(match.params.id);

    
    useEffect(() => {
        
        getRates(ZipCode)
        
        
      },[getRates])

    return(
        <div>
           <FilterLayout loading={loading} getRates={getRates} filterByProvider={filterByProvider} ZipCode={ZipCode} rates={rates}/>
        </div>
    )
}

Landing.propTypes = {
    getRates: PropTypes.func.isRequired,
    rates: PropTypes.object.isRequired,
    currentRates: PropTypes.object.isRequired,
    filterByProvider: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    rates: state.rates
});

export default connect(mapStateToProps, {getRates, filterByProvider})(Landing);