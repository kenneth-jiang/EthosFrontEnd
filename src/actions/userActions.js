import { backendAPI, headers } from '../services/Adapter';
import { GET_CURRENT_USER, GET_ALL_USERS, UPDATE_USER_INFO, GET_USER_FAVORITES } from './actionTypes';

export function getCurrentUser() {
  return (dispatch) => {
    return fetch(`${backendAPI}/current_user`, {
      headers: Object.assign({}, headers, {token: localStorage.getItem('token')}) // this is correct, don't change it
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_CURRENT_USER, payload: {currentUser: data} }))
  }
}

export function getAllUsers() {
  return (dispatch) => {
    return fetch(`${backendAPI}/all_users`, {
      headers: headers,
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_ALL_USERS, payload: {allUsers: data} }))
  }
}

export function signupUserInfo(userInfo, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/update_user`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({user: userInfo})
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: UPDATE_USER_INFO, payload: {currentUser: data} })
        return history.push('/')
      })
  }
}

export function updateUserInfo(userInfo) {
  return (dispatch) => {
    return fetch(`${backendAPI}/update_user`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({user: userInfo})
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: UPDATE_USER_INFO, payload: {currentUser: data} })
      })
  }
}

export function getUserFavorites() {
  return (dispatch) => {
    return fetch(`${backendAPI}/user_favorites`, {
      headers: headers
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_USER_FAVORITES, payload: {favorites: data.favorites }}))
  }
}
