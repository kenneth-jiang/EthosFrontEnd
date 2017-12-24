export default (state = { personality: {} }, action) => {
  switch (action.type) {
    case ('FETCH_PERSONALITY'):
      return Object.assign({}, state, {personality: action.payload.personality})
    default:
      return state;
  }
}
