import { backendAPI, headers } from '../services/Adapter';
import { AUTHORIZE_USER, UNAUTHORIZE_USER } from './actionTypes';

export function signupUser(signData, history) {
  return (dispatch) => {
    fetch(`${backendAPI}/signup`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(signData)
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem('token', data.token);
          dispatch({ type: AUTHORIZE_USER, payload: {currentUser: data, isLoggedIn: true, error: false} })
          history.push('/')
        } else {
          return {error: 'Invalid sign up!'}
        }
      })
  }
}

export function loginUser(loginData, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/login`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(loginData)
     })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem('token', data.token);
          dispatch({ type: AUTHORIZE_USER, payload: {currentUser: data, isLoggedIn: true, error: false} })
          history.push('/')
        } else {
          return {error: 'Invalid login!'}
        }
      })
  }
}

export function logoutUser() {
  return { type: UNAUTHORIZE_USER}
}
