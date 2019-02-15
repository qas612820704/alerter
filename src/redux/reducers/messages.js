const SET_MESSAGE = 'SET_MESSAGE';

const initialState = {***REMOVED***

const messages = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        [action.payload.type]: action.payload.message
      ***REMOVED***
    default:
      return state;
  ***REMOVED***
***REMOVED***

function setMessage(type, message = '') {
  return {
    type: SET_MESSAGE,
    payload: { type, message ***REMOVED***
  ***REMOVED***
***REMOVED***

export function setAuthInfoMessage(message) {
  return setMessage('auth:info', message);
***REMOVED***

export function setAuthErrorMessage(message) {
  return setMessage('auth:error', message);
***REMOVED***

export default messages;
