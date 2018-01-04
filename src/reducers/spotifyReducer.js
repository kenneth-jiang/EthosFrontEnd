import { GET_SPOTIFY_SELF, SPOTIFY_FEATURED_PLAYLISTS, SEARCH_SPOTIFY_PLAYLISTS, SPOTIFY_USER_PLAYLISTS, SPOTIFY_USER_TOP_TRACKS, SPOTIFY_USER_TOP_ARTISTS, SPOTIFY_USER_RECENT_TRACKS, SPOTIFY_SEARCH_TRACK, SPOTIFY_SEARCH_ARTIST, SPOTIFY_ARTIST_TRACKS, SPOTIFY_SET_URI } from '../actions/actionTypes';


const INITIAL_STATE = { isLoggedIn: false, currentUser: {}, tracks: {}, artists: {}, playlists: {}, uri: "spotify:track:6kxmBja0pKhbBXiAMMeXwh" };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (GET_SPOTIFY_SELF):
      return {...state, currentUser: action.payload.results, isLoggedIn: true};
    case (SPOTIFY_USER_PLAYLISTS):
      return {...state, playlists: action.payload.results.playlists};
    case (SPOTIFY_USER_TOP_TRACKS):
      return {...state, tracks: action.payload.results};
    case (SPOTIFY_USER_TOP_ARTISTS):
      return {...state, artists: action.payload.results};
    case (SPOTIFY_USER_RECENT_TRACKS):
      return {...state, tracks: action.payload.results};
    case (SPOTIFY_SEARCH_TRACK):
      return {...state, tracks: action.payload.results.tracks};
    case (SPOTIFY_SEARCH_ARTIST):
      return {...state, artists: action.payload.results.artists};
    case (SPOTIFY_ARTIST_TRACKS):
      return {...state, tracks: {items: action.payload.results.tracks}};
    case (SEARCH_SPOTIFY_PLAYLISTS):
      return {...state, playlists: action.payload.results.playlists};
    case (SPOTIFY_FEATURED_PLAYLISTS):
      return {...state, playlists: action.payload.results.playlists};
    case (SPOTIFY_SET_URI):
      return {...state, uri: action.payload.uri};
    default:
      return state;
  }
}
