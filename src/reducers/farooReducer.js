import { FAROO_SEARCH } from '../actions/actionTypes';


const INITIAL_STATE = { results: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (FAROO_SEARCH):
      return {...state, results: action.payload.results};
    default:
      return state;
  }
}