import { WOLFRAM_SEARCH } from '../actions/actionTypes';


const INITIAL_STATE = {search: null, results: null};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (WOLFRAM_SEARCH):
    console.log(action.payload)
      return {...state, results: action.payload.results};
    default:
      return state;
  }
}
