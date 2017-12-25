import { backendAPI, headers } from '../services/Adapter';
import { WOLFRAM_SEARCH } from './actionTypes';

export function getWolframSearch(searchData, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/search`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({search_term: searchData})
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        dispatch({ type: WOLFRAM_SEARCH, payload: {results: data} })
        history.push('/wolfram_results')
      })
  }
}
