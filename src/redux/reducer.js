import { combineReducers ***REMOVED*** from 'redux';
import auth from './reducers/auth';
import user from './reducers/user';
import messages from './reducers/messages';

export default combineReducers({
  auth,
  user,
  messages,
***REMOVED***);
