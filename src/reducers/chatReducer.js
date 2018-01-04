import { USER_MESSAGES } from '../actions/actionTypes';


const INITIAL_STATE = { messages: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (USER_MESSAGES):
      return {...state, messages: action.payload.results};
    default:
      return state;
  }
}
