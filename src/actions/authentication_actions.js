import { backendAPI, headers } from '../services/adapter';

export function signupUser(userData, history) {
  return (dispatch) => {
    fetch(`${backendAPI}/signup`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(userData)
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem('token', data.token);
          dispatch({ type: 'SIGNUP_USER', payload: {user: data, isLoggedIn: true, error: false} })
          history.push('/')
        } else {
          return {error: 'Invalid sign up!'}
        }
      })
  }
}

export function loginUser(userData, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/login`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(userData)
     })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem('token', data.token);
          dispatch({ type: 'LOGIN_USER', payload: {user: data, isLoggedIn: true, error: false} })
          history.push('/')
        } else {
          return {error: 'Invalid login!'}
        }
      })
  }
}

export function logoutUser() {
  return { type: 'LOGOUT_USER'}
}

export function getCurrentUser() {
  return (dispatch) => {
    return fetch(`${backendAPI}/current_user`, {
      headers: Object.assign({}, headers, {token: localStorage.getItem('token')})
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'CURRENT_USER', payload: {user: data} }))
  }
}

export function getAllUsers() {
  return (dispatch) => {
    return fetch(`${backendAPI}/all_users`, {
      headers: Object.assign({}, headers, {token: localStorage.getItem('token')})
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'ALL_USERS', payload: {users: data} }))
  }
}
