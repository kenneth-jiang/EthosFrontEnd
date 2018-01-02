import { GET_USER_PERSONALITY } from '../actions/actionTypes';


const INITIAL_STATE = { personalities: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (GET_USER_PERSONALITY):
      return {...state, personalities: action.payload.personalities};
    default:
      return state;
  }
}
