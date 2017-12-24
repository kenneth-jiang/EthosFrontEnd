import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import searchReducer from './search_reducer';
import personalityReducer from './personality_reducer';
import sidebarReducer from './sidebar_reducer';
import userReducer from './user_reducer';

export default combineReducers({
  authentication: authenticationReducer,
  search: searchReducer,
  personality: personalityReducer,
  sidebar: sidebarReducer,
  user: userReducer,
});
