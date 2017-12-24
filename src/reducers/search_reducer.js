export default (state = { search: '', results: '', isLoaded: false }, action) => {
  switch (action.type) {
    case ('SEARCH_INPUT'):
      return Object.assign({}, state, {results: action.payload.results, isLoaded: true})
    default:
      return state;
  }
}
