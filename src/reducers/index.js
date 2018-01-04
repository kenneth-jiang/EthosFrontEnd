import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer';
import userReducer from './userReducer';
import sidebarReducer from './sidebarReducer';
import personalityReducer from './personalityReducer';
import wolframReducer from './wolframReducer';
import youtubeReducer from './youtubeReducer';
import newsReducer from './newsReducer';
import redditReducer from './redditReducer';
import spotifyReducer from './spotifyReducer';
import chatReducer from './chatReducer';
import tonesReducer from './tonesReducer';


export default combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  sidebar: sidebarReducer,
  personality: personalityReducer,
  wolfram: wolframReducer,
  youtube: youtubeReducer,
  news: newsReducer,
  reddit: redditReducer,
  spotify: spotifyReducer,
  chat: chatReducer,
  tones: tonesReducer,
});
