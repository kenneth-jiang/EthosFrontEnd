import { backendAPI, headers } from '../services/Adapter';
import { AUTHORIZE_USER, UNAUTHORIZE_USER, GET_CURRENT_USER, ERROR, GET_PROFILE_PIC } from './actionTypes';


export function signupUser(signupData, history) {
  return (dispatch) => {
    fetch(`${backendAPI}/signup`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({user: signupData})
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem('token', data.token);
          dispatch({ type: AUTHORIZE_USER, payload: {currentUser: data, isLoggedIn: true, error: false} });
          dispatch({ type: GET_CURRENT_USER, payload: {currentUser: data }});
          return history.push('/')
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
    return history.push('/login');
  }
}

export function error() {
  return (dispatch) => {
    return dispatch({ type: ERROR });
  }
}

export function getProfilePic(username) {
  return (dispatch) => {
    return fetch(`${backendAPI}/profile_pic`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({username: username})
     })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          return dispatch({ type: GET_PROFILE_PIC, payload: {results: data.profile_pic} })
        } else {
          return dispatch({ type: ERROR, payload: {error: data.error} });
        }
      })
  }
}
