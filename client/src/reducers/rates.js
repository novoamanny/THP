import {GET_RATES_FAIL, GET_RATES_SUCCESS, GET_RATE_SUCCESS, GET_RATE_FAIL, CONTRACT_LENGTH_FILTER_SUCCESS, CONTRACT_LENGTH_FILTER_FAIL, PROVIDER_FILTER_FAIL, PROVIDER_FILTER_SUCCESS} from '../actions/types';

const initialState = {
  rates: [],
  currentRates: [],
  rate: null,
  error: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RATES_SUCCESS:
      return {...state, rates: payload};
    case GET_RATES_FAIL:
      return {...state, error: payload};
    case GET_RATE_SUCCESS:
      return {...state, rate: payload};
    case GET_RATE_FAIL:
      return {...state, error: payload};
    case CONTRACT_LENGTH_FILTER_SUCCESS:
      return {...state, currentRates: payload};
    case CONTRACT_LENGTH_FILTER_FAIL:
      return {...state, error: payload};
    case PROVIDER_FILTER_SUCCESS:
      return {...state, currentRates: payload};
    case PROVIDER_FILTER_FAIL:
      return {...state, error: payload};
  
    default:
      return state;
  }
}