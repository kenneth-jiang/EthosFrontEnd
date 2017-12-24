import { backendAPI, headers } from '../services/adapter';

export function fetchSearchAnswers(searchData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/search`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({search_term: searchData})
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        dispatch({ type: 'SEARCH_INPUT', payload: {results: data, isLoaded: true} })
      })
  }
}
