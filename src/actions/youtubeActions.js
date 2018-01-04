import { backendAPI, headers } from '../services/Adapter';
import { YOUTUBE_SEARCH, VIEW_CURRENT_VIDEO } from './actionTypes';

export function searchYoutube(searchData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/youtube_search`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({search_term: searchData})
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: YOUTUBE_SEARCH, payload: {videos: data.items} }))
  }
}

export function viewCurrentVideo(videoData) {
  return (dispatch) => {
    return dispatch({ type: VIEW_CURRENT_VIDEO, payload: {currentVideo: videoData} });
  }
}

export function favoriteYoutube(favoriteData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/youtube_favorite`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(favoriteData)
    })
  }
}
