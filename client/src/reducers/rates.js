import {GET_RATES_FAIL, GET_RATES_SUCCESS} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RATES_SUCCESS:
      return [...state, payload];
      case GET_RATES_FAIL:
      return [...state, payload];
    default:
      return state;
  }
}