import { backendAPI, headers } from '../services/Adapter';
import { NEWS_SEARCH } from './actionTypes';

export function searchNews(searchData, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/news_search`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({search_term: searchData})
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: NEWS_SEARCH, payload: {results: data} })
        return history.push('/news')
      })
  }
}
