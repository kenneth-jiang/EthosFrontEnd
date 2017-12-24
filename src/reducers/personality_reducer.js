export default (state = { personality: {}, isLoaded: false }, action) => {
  switch (action.type) {
    case ('FETCH_PERSONALITY'):
      return Object.assign({}, state, {personality: action.payload.personality, isLoaded: true})
    default:
      return state;
  }
}
