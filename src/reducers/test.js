export default (state = [], action) => {
  switch (action.type) {
    case ("Hello World!"):
      return Object.assign({}, state, {loading:true})
    default:
      return state
  }
}
