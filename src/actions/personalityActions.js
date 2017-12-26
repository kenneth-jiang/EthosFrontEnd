import { backendAPI, headers } from '../services/Adapter';
import { GET_USER_PERSONALITY } from './actionTypes';

export function getUserPersonality() {
  return (dispatch) => {
    return fetch(`${backendAPI}/personalities`, { headers: headers })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_USER_PERSONALITY, payload: {personalities: data} }))
  }
}
