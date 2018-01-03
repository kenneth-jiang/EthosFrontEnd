import { GET_CURRENT_USER, GET_ALL_USERS, UPDATE_USER_INFO, GET_USER_FAVORITES } from '../actions/actionTypes';


const INITIAL_STATE = { currentUser: {}, allUsers: [], favorites: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (GET_CURRENT_USER):
      return {...state, currentUser: action.payload.currentUser};
    case (GET_ALL_USERS):
      return {...state, allUsers: action.payload.allUsers};
    case (UPDATE_USER_INFO):
      console.log(action.payload.currentUser)
      return {...state, currentUser: action.payload.currentUser};
    case (GET_USER_FAVORITES):
      console.log(action.payload.favorites)
      return {...state, favorites: action.payload.favorites};
    default:
      return state;
  }
}
