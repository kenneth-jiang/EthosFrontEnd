import { backendAPI, headers } from '../services/adapter';
import { USER_MESSAGES } from './actionTypes';


export function getAllMessages() {
  return (dispatch) => {
    return fetch(`${backendAPI}/all_messages`, {
      headers: headers(),
     })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          return dispatch({ type: USER_MESSAGES, payload: {results: data} })
        }
      })
  }
}

export function sendMessage(content, username, time, user_id) {
  return (dispatch) => {
    fetch(`${backendAPI}/send_message`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ content, username, time, user_id })
    })
  }
}
