import { AUTHORIZE_USER, UNAUTHORIZE_USER, GET_CURRENT_USER, ERROR } from '../actions/actionTypes';


const INITIAL_STATE = { currentUser: {}, isLoggedIn: false, error: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (AUTHORIZE_USER):
      return  {...state, currentUser: action.payload.currentUser, isLoggedIn: true};
    case (UNAUTHORIZE_USER):
      return {...state, currentUser: {}, isLoggedIn: false};
    case (GET_CURRENT_USER):
      return {...state, currentUser: action.payload.currentUser, isLoggedIn: true};
    case (ERROR):
      return {...state, error: action.payload.error, isLoggedIn: false};
    default:
      return state;
  }
}
