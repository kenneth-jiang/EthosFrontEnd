import { GET_USER_TONES } from '../actions/actionTypes';


const INITIAL_STATE = { tones: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (GET_USER_TONES):
      console.log(action.payload);
      return {...state, tones: action.payload};
    default:
      return state;
  }
}
