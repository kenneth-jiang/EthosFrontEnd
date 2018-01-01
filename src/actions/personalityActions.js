import { backendAPI, headers } from '../services/Adapter';
import { GET_USER_PERSONALITY } from './actionTypes';


export function createUserPersonality() {
  return (dispatch) => {
    return fetch(`${backendAPI}/create_user_personality`, { headers: headers })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_USER_PERSONALITY, payload: {personalities: data} }))
  }
}

export function showUserPersonality() {
  return (dispatch) => {
    return fetch(`${backendAPI}/show_user_personality`, { headers: headers })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_USER_PERSONALITY, payload: {personalities: data} }))
  }
}
