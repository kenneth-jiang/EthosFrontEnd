import { backendAPI, headers } from '../services/Adapter';
import { AUTHORIZE_USER, UNAUTHORIZE_USER, GET_CURRENT_USER, ERROR } from './actionTypes';

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
          dispatch({ type: AUTHORIZE_USER, payload: {currentUser: data, isLoggedIn: true, error: false} });
          dispatch({ type: GET_CURRENT_USER, payload: {currentUser: data }});
          history.push('/')
        } else {
          return dispatch({ type: ERROR, payload: {error: 'Invalid sign up!'} });
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
          dispatch({ type: AUTHORIZE_USER, payload: {currentUser: data, isLoggedIn: true, error: false} });
          dispatch({ type: GET_CURRENT_USER, payload: {currentUser: data }});
          history.push('/')
        } else {
          return dispatch({ type: ERROR, payload: {error: 'Invalid log in!'} });
        }
      })
  }
}

export function logoutUser() {
  return { type: UNAUTHORIZE_USER };
}

export function error() {
  return { type: ERROR };
}
