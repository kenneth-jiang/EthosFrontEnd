import { WOLFRAM_SEARCH } from '../actions/actionTypes';


const INITIAL_STATE = { results: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (WOLFRAM_SEARCH):
      console.log(action.payload.results);
      return {...state, results: action.payload.results};
    default:
      return state;
  }
}
