import {GET_METERS_FAIL, GET_METERS_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/types';

const initialState = {
  meters: null,
  confirmation: null,
  errors:null,
  metersLoading: true,
  confirmationLoading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_METERS_SUCCESS:
      return {...state, meters: payload, metersLoading: false};
    case GET_METERS_FAIL:
    return {...state, errors: payload};
    case REGISTER_SUCCESS:
    return {...state, confirmation: payload, confirmationLoading: false};
    case REGISTER_FAIL:
    return {...state, errors: payload};
    default:
      return state;
  }
}