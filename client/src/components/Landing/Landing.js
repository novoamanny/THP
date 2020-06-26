import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FilterLayout from '../FilterLayout/FilterLayout';

import {getRates} from '../../actions/rates';

const Landing = ({match, getRates, rates}) =>{

    const [ZipCode, SetZipCode] = useState(match.params.id);

    

    useEffect(() => {
        
        getRates(ZipCode)
        
        
      },[getRates])

    return(
        <div>
           <FilterLayout ZipCode={ZipCode} rates={rates}/>
        </div>
    )
}

Landing.propTypes = {
    getRates: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    rates: state.rates
});

export default connect(mapStateToProps, {getRates})(Landing);