import { AUTHORIZE_USER, UNAUTHORIZE_USER, GET_CURRENT_USER, ERROR, GET_PROFILE_PIC } from '../actions/actionTypes';


const INITIAL_STATE = { currentUser: {}, isLoggedIn: false, error: false, profile_pic: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (AUTHORIZE_USER):
      return  {...state, currentUser: action.payload.currentUser, isLoggedIn: true};
    case (UNAUTHORIZE_USER):
      return INITIAL_STATE;
    case (GET_CURRENT_USER):
      return {...state, currentUser: action.payload.currentUser, isLoggedIn: true};
    case (ERROR):
      return {...state, error: action.payload.error, isLoggedIn: false};
    case (GET_PROFILE_PIC):
      return {...state, profile_pic: action.payload.results};
    default:
      return state;
  }
}
