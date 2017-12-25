import { GET_USER_PERSONALITY } from '../actions/actionTypes';


export default (state = {personalities: {}}, action) => {
  switch (action.type) {
    case (GET_USER_PERSONALITY):
      return {...state, personalities: action.payload.personality};
    default:
      return state;
  }
}
