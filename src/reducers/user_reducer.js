export default (state = {allUsers: []}, action) => {
  switch (action.type) {
    case ('ALL_USERS'):
      return Object.assign({}, state, {allUsers: action.payload.users});
    default:
      return state;
  }
}
