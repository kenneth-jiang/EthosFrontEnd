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
          return history.push('/signup_info')
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
          return history.push('/')
        } else {
          return dispatch({ type: ERROR, payload: {error: 'Invalid log in!'} });
        }
      })
  }
}

export function logoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: UNAUTHORIZE_USER });
    return history.push('/welcome');
  }
}

export function error() {
  return (dispatch) => {
    return dispatch({ type: ERROR });
  }
}
