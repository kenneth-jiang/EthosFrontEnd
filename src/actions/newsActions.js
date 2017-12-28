import { backendAPI, headers } from '../services/Adapter';
import { NEWS_SEARCH, SOURCE_SEARCH } from './actionTypes';

export function searchNews(searchData, startDate, endDate) {
  return (dispatch) => {
    return fetch(`${backendAPI}/news_search`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({search_term: searchData, startDate: startDate, endDate: endDate})
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: NEWS_SEARCH, payload: {results: data} })
      })
  }
}

export function searchNewsSource(searchData, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/sources_search`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({search_term: searchData})
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: SOURCE_SEARCH, payload: {results: data} })
        return history.push('/news');
      })
  }
}

export function favoriteNews(favoriteData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/news_favorite`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(favoriteData)
    })
  }
}

export function favoriteNewsSource(favoriteData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/sources_favorite`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(favoriteData)
    })
  }
}
