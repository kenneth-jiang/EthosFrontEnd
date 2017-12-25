import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer';
import userReducer from './userReducer';
import sidebarReducer from './sidebarReducer';
import personalityReducer from './personalityReducer';
import wolframReducer from './wolframReducer';


export default combineReducers({
  authentication: authenticationReducer,
  wolfram: wolframReducer,
  personality: personalityReducer,
  sidebar: sidebarReducer,
  user: userReducer,
});
