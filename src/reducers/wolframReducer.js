import { WOLFRAM_SEARCH } from '../actions/actionTypes';


export default (state = {search: "", results: ""}, action) => {
  switch (action.type) {
    case (WOLFRAM_SEARCH):
      return {...state, results: action.payload.results};
    default:
      return state;
  }
}
