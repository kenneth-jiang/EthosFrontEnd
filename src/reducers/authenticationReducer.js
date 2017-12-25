import { AUTHORIZE_USER, UNAUTHORIZE_USER, GET_CURRENT_USER } from '../actions/actionTypes';


export default (state = {currentUser: {}, isLoggedIn: false, error: false}, action) => {
  switch (action.type) {
    case (AUTHORIZE_USER):
      return  {...state, currentUser: action.payload.user, isLoggedIn: true};
    case (UNAUTHORIZE_USER):
      localStorage.removeItem('token');
      return {...state, currentUser: {}, isLoggedIn: false};
    case (GET_CURRENT_USER):
      return {...state, currentUser: action.payload.user, isLoggedIn: true};
    default:
      return state;
  }
}
