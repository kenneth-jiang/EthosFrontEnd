import { backendAPI, headers } from '../services/Adapter';
import { GET_SPOTIFY_SELF, SPOTIFY_USER_TOP_TRACKS, SPOTIFY_USER_TOP_ARTISTS, SPOTIFY_USER_RECENT_TRACKS, SPOTIFY_SEARCH_TRACK, SPOTIFY_SEARCH_ARTIST, SPOTIFY_ARTIST_TRACKS, SPOTIFY_SET_URI } from './actionTypes';


export function spotifyAccessToken(history, location) {
  return (dispatch) => {
    return fetch(`${backendAPI}/spotify_token`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ code: location.search.split("?code=")[1] })
    })
      .then(resp => resp.json())
      .then(data => history.push('/spotify'))
  }
}

export function getSpotifySelf() {
  return (dispatch) => {
    return fetch(`${backendAPI}/spotify_self`, {
      method: 'POST',
      headers: headers,
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        dispatch({ type: GET_SPOTIFY_SELF, payload: {results: data} })
      })
  }
}

export function getSpotifyUserTopTracks() {
  return (dispatch) => {
    return fetch(`${backendAPI}/spotify_user_top_tracks`, {
      method: 'POST',
      headers: headers,
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: SPOTIFY_USER_TOP_TRACKS, payload: {results: data} })
      })
  }
}
export function getSpotifyUserTopArtists() {
  return (dispatch) => {
    return fetch(`${backendAPI}/spotify_user_top_artists`, {
      method: 'POST',
      headers: headers,
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: SPOTIFY_USER_TOP_ARTISTS, payload: {results: data} })
      })
  }
}
export function getSpotifyUserRecentTracks() {
  return (dispatch) => {
    return fetch(`${backendAPI}/spotify_user_recent_tracks`, {
      method: 'POST',
      headers: headers,
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: SPOTIFY_USER_RECENT_TRACKS, payload: {results: data} })
      })
  }
}
export function searchSpotifyTrack(trackData) {
  console.log('here')
  return (dispatch) => {
    return fetch(`${backendAPI}/spotify_search_track`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ search_term: trackData })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: SPOTIFY_SEARCH_TRACK, payload: {results: data} })
      })
  }
}
export function searchSpotifyArtist(artistData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/spotify_search_artist`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ search_term: artistData })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: SPOTIFY_SEARCH_ARTIST, payload: {results: data} })
      })
  }
}

export function getArtistTracks(artistId, artistName) {
  return (dispatch) => {
    return fetch(`${backendAPI}/spotify_artist_tracks`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ artistId: artistId, search_term: artistName })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: SPOTIFY_ARTIST_TRACKS, payload: {results: data} })
      })
  }
}

export function spotifySetURI(uri) {
  return (dispatch) => {
    return dispatch({ type: SPOTIFY_SET_URI, payload: {uri: uri} })
  }
}
