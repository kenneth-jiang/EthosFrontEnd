import { NEWS_SEARCH, SOURCE_SEARCH } from '../actions/actionTypes';


const INITIAL_STATE = { results: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (NEWS_SEARCH):
      console.log(action.payload.results)
      return {...state, results: action.payload.results};
    case (SOURCE_SEARCH):
      console.log(action.payload.results)
      return {...state, results: action.payload.results};
    default:
      return state;
  }
}
