import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import searchReducer from './search_reducer';
import personalityReducer from './personality_reducer';

export default combineReducers({
  auth: authReducer,
  search: searchReducer,
  personality: personalityReducer,
});
