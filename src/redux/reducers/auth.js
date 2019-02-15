import {
  setAuthInfoMessage,
  setAuthErrorMessage
***REMOVED*** from './messages';

const UPDATE_AUTH = 'UPDATE_AUTH';
const CLEAR_AUTH = 'CLEAR_AUTH';

const initialState = {
  accessToken: '',
  idToken: '',
  expiresAt: Date.now(),
***REMOVED***

const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        ...state,
        ...action.payload,
      ***REMOVED***
    case CLEAR_AUTH:
      return initialState;
    default:
      return state;
  ***REMOVED***
***REMOVED***

export function updateAuth(auth) {
  return {
    type: UPDATE_AUTH,
    payload: auth,
  ***REMOVED***
***REMOVED***

export function clearAuth() {
  return { type: CLEAR_AUTH ***REMOVED***
***REMOVED***

export function authentication() {
  return async (dispatch, getState, apis) => {
    try {
      dispatch(
        setAuthInfoMessage('parsing authentication callback...')
      );

      const auth = await apis.authentication();
      const { accessToken, idToken, expiresIn ***REMOVED*** = auth;

      dispatch(
        updateAuth({
          accessToken,
          idToken,
          expiresAt: Date.now() + expiresIn * 1000,
        ***REMOVED***)
      );

      dispatch(
        setAuthInfoMessage('parsing authentication callback done')
      );

      return auth;
    ***REMOVED*** catch (err) {
      dispatch(
        setAuthErrorMessage(`${err.name***REMOVED*** — ${err.message***REMOVED***`)
      );
      throw err;
    ***REMOVED***
  ***REMOVED***
***REMOVED***

export default auth;
