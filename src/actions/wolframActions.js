import { backendAPI, headers } from '../services/Adapter';
import { WOLFRAM_SEARCH } from './actionTypes';

export function getWolframSearch(searchData, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/wolfram_search`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({search_term: searchData})
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: WOLFRAM_SEARCH, payload: {results: data} }))
  }
}

export function favoriteWolfram(favoriteData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/wolfram_favorite`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify( {wolfram_data: favoriteData })
    })
  }
}
