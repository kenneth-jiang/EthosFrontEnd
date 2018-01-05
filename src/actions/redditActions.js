import { backendAPI, headers } from '../services/Adapter';
import { GET_REDDIT_SELF, GET_REDDIT_FUNNY, GET_REDDIT_AWW, GET_REDDIT_TIL, GET_REDDIT_PICS, GET_REDDIT_POPULAR, GET_REDDIT_CUSTOM, GET_REDDIT_POST } from './actionTypes';


export function redditAccessToken(history, location) {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_token`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({code: location.search.split("&code=")[1]})
    })
      .then(resp => resp.json())
      .then(data => history.push('/reddit'))
  }
}

export function getRedditFunny() {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_funny`, {
      method: 'POST',
      headers: headers(),
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_REDDIT_FUNNY, payload: {results: data} }))
  }
}

export function getRedditAww() {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_aww`, {
      method: 'POST',
      headers: headers(),
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: GET_REDDIT_AWW, payload: {results: data} })
      })
  }
}

export function getRedditTIL() {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_til`, {
      method: 'POST',
      headers: headers(),
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: GET_REDDIT_TIL, payload: {results: data} })
      })
  }
}

export function getRedditPics() {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_pics`, {
      method: 'POST',
      headers: headers(),
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: GET_REDDIT_PICS, payload: {results: data} })
      })
  }
}

export function getRedditPopular() {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_popular`, {
      method: 'POST',
      headers: headers(),
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: GET_REDDIT_POPULAR, payload: {results: data} })
      })
  }
}

export function searchCustomReddit(subreddit, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_custom`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ search_term: subreddit })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: GET_REDDIT_CUSTOM, payload: {results: data} })
        history.push('/reddit/custom')
      })
  }
}

export function getRedditSelf() {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_self`, {
      method: 'POST',
      headers: headers(),
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: GET_REDDIT_SELF, payload: {results: data} })
      })
  }
}

export function getRedditPost(permalink, history) {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_post`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ permalink: permalink })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: GET_REDDIT_POST, payload: {results: data} })
        return history.push('/reddit/post')
      })
  }
}

export function favoriteReddit(favoriteData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/reddit_favorite`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(favoriteData)
    })
  }
}
