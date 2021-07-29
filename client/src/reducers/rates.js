import {GET_CURRENT_RATES_SUCCESS,GET_RATES_FAIL, GET_RATES_SUCCESS, GET_RATE_SUCCESS, GET_RATE_FAIL, CONTRACT_LENGTH_FILTER_SUCCESS, CONTRACT_LENGTH_FILTER_FAIL, PROVIDER_FILTER_FAIL, PROVIDER_FILTER_SUCCESS} from '../actions/types';

const initialState = {
  rates: null,
  currentRates: null,
  rate: null,
  error: [],
  loading: true,
  rateLoading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RATES_SUCCESS:
      return {...state, rates: payload, currentRates: payload, loading: false};
    case GET_CURRENT_RATES_SUCCESS:
      return {...state, currentRates: payload, loading: false};
    case GET_RATES_FAIL:
      return {...state, error: payload};
    case GET_RATE_SUCCESS:
      return {...state, rate: payload, rateLoading: false};
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