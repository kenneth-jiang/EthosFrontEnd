import { backendAPI, headers } from '../services/Adapter';
import { GET_CURRENT_USER, GET_ALL_USERS } from './actionTypes';

export function getCurrentUser() {
  return (dispatch) => {
    return fetch(`${backendAPI}/current_user`, {
      headers: Object.assign({}, headers, {token: localStorage.getItem('token')})
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_CURRENT_USER, payload: {user: data} }))
  }
}

export function getAllUsers() {
  return (dispatch) => {
    return fetch(`${backendAPI}/all_users`, {
      headers: Object.assign({}, headers, {token: localStorage.getItem('token')})
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_ALL_USERS, payload: {users: data} }))
  }
}
