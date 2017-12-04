import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import postsReducer from './posts';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  postsState: postsReducer
});

export default rootReducer;
