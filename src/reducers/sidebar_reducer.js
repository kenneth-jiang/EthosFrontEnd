export default(state = { toggleVisibility: false }, action) => {
  switch (action.type) {
    case ("TOGGLE_VISIBLITY"):
      return Object.assign({}, state, { toggleVisibility: !state.toggleVisibility })
    default:
      return state;
  }
}
