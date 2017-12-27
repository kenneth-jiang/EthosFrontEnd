import { backendAPI, headers } from '../services/Adapter';
import { FAROO_SEARCH } from './actionTypes';

export function searchFaroo(searchData, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/faroo_search`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({search_term: searchData})
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: FAROO_SEARCH, payload: {results: data} })
        return history.push('/faroo')
      })
  }
}
