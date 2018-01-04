import { headers, backendAPI } from '../services/Adapter';
import { GET_USER_TONES } from './actionTypes';


export function createUserTones() {
  return (dispatch) => {
    return fetch(`${backendAPI}/create_user_tones`, { headers: headers })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        dispatch({ type: GET_USER_TONES, payload: data })
    })
  }
}
