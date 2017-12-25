import { GET_CURRENT_USER, GET_ALL_USERS } from '../actions/actionTypes';


export default (state = {currentUser: {}, allUsers: []}, action) => {
  switch (action.type) {
    case (GET_CURRENT_USER):
      return {...state, currentUser: action.payload.user};
    case (GET_ALL_USERS):
      return {...state, allUsers: action.payload.users};
    default:
      return state;
  }
}
