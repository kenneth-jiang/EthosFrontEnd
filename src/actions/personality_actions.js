import { backendAPI, headers } from '../services/adapter';

export function fetchPersonality() {
  return (dispatch) => {
    return fetch(`${backendAPI}/personalities`, { headers: headers })
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'FETCH_PERSONALITY', payload: {personality: data} }))
  }
}
