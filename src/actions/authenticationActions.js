import { backendAPI, headers } from '../services/Adapter';
import { AUTHORIZE_USER, UNAUTHORIZE_USER, GET_CURRENT_USER, ERROR, GET_PROFILE_PIC } from './actionTypes';


export function signupUser(signupData, history) {
  console.log('signup, headers, authorization', headers().Authorization);
  console.log('localstorage', localStorage.getItem('token'));
  return (dispatch) => {
    fetch(`${backendAPI}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
      body: JSON.stringify({user: signupData})
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem('token', data.token);
          console.log(localStorage.getItem('token'));
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
  console.log('login, headers, authorization', headers.Authorization);
  console.log('localstorage', localStorage.getItem('token'));
  return (dispatch) => {
    return fetch(`${backendAPI}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
      body: JSON.stringify(loginData)
     })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem('token', data.token);
          console.log('after login, headers, authorization', headers.Authorization);
          console.log(localStorage.getItem('token'));
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
    localStorage.clear();
    dispatch({ type: UNAUTHORIZE_USER });
    history.push('/login');
    console.log('logout, headers, authorization', headers.Authorization);
    console.log('localstorage', localStorage.getItem('token'));
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
      headers: headers(),
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
