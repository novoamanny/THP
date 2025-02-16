import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FilterLayout from '../FilterLayout/FilterLayout';

import {getRates, getFilteredRates} from '../../actions/rates';
import {filterByProvider} from '../../actions/filter';
import Navbar from '../Navbar/Navbar';
import Spinner from '../Spinner/Spinner';

const Landing = ({match, getRates, getFilteredRates, rates:{rates, currentRates, loading}}) =>{
    
    const [ZipCode, SetZipCode] = useState(match.params.id);
    const [mobileSlide, setMobileSlide] = useState(false);
    
    useEffect(() => {
        
        getRates(ZipCode)
        
        
      },[getRates])

    return loading && currentRates === null ? <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center',position: 'fixed', top: '35%'}}><Spinner/></div> : (
        <div>
            <Navbar setMobileSlide={setMobileSlide} mobileSlide={mobileSlide} url={match.params}/>
            
            <FilterLayout getFilteredRates={getFilteredRates} setMobileSlide={setMobileSlide} mobileSlide={mobileSlide} loading={loading} getRates={getRates} filterByProvider={filterByProvider} ZipCode={ZipCode} rates={currentRates} defaultRates={rates} />
            
        </div>
    )
}

Landing.propTypes = {
    getRates: PropTypes.func.isRequired,
    getFilteredRates: PropTypes.func.isRequired,
    rates: PropTypes.object.isRequired,
    currentRates: PropTypes.object.isRequired,
    filterByProvider: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    rates: state.rates
});

export default connect(mapStateToProps, {getRates, getFilteredRates, filterByProvider})(Landing);