import { GET_REDDIT_SELF, GET_REDDIT_FUNNY, GET_REDDIT_AWW, GET_REDDIT_TIL, GET_REDDIT_PICS, GET_REDDIT_POPULAR, GET_REDDIT_CUSTOM, GET_REDDIT_POST } from '../actions/actionTypes';


const INITIAL_STATE = { isLoggedIn: false, currentUser: {}, aww: {}, til: {}, funny: {}, pics: {}, popular: {}, custom: {}, currentPost: [] };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (GET_REDDIT_SELF):
      return {...state, currentUser: action.payload.results, isLoggedIn: true};
    case (GET_REDDIT_FUNNY):
      return {...state, funny: action.payload.results};
    case (GET_REDDIT_AWW):
      return {...state, aww: action.payload.results};
    case (GET_REDDIT_TIL):
      return {...state, til: action.payload.results};
    case (GET_REDDIT_PICS):
      return {...state, pics: action.payload.results};
    case (GET_REDDIT_POPULAR):
      return {...state, popular: action.payload.results};
    case (GET_REDDIT_CUSTOM):
      return {...state, custom: action.payload.results};
    case (GET_REDDIT_POST):
      return {...state, currentPost: action.payload.results};
    default:
      return state;
  }
}
