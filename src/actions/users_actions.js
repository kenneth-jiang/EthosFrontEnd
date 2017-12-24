import { backendAPI, headers } from '../services/adapter';

export function getAllUsers() {
  return (dispatch) => {
    return fetch(`${backendAPI}/all_users`, {
      headers: Object.assign({}, headers, {token: localStorage.getItem('token')})
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'ALL_USERS', payload: {users: data} }))
  }
}
