import { useCallback, useMemo ***REMOVED*** from 'react';
import { useMappedState, useDispatch ***REMOVED*** from 'redux-react-hook';
import {
  authentication, updateProfile,
  setAccessTokenToAxios,  registerIfNeeded
***REMOVED*** from '../redux/actions';


export function useIsLogin() {
  const mapIsLoginState = useCallback(
    state => state.auth.expiresAt > Date.now(),
    [],
  );

  return useMappedState(mapIsLoginState);
***REMOVED***

export function useAuthMessage() {
  const mapAuthMessageState = useCallback(
    state => ({
      info: state.messages['auth:info'],
      error: state.messages['auth:error'],
    ***REMOVED***),
    [],
  );

  return useMappedState(mapAuthMessageState);
***REMOVED***

export function useUserProfile() {
  const mapUserProfileState = useCallback(
    state => state.user,
    []
  );

  return useMappedState(mapUserProfileState);
***REMOVED***


export function useDispatchAuthentication() {
  const dispatch = useDispatch();

  return useMemo(async () => {
    const auth = await dispatch(authentication());

    dispatch(setAccessTokenToAxios(auth.accessToken));

    const profile = await dispatch(registerIfNeeded(auth));

    dispatch(updateProfile(profile));

    return auth;
  ***REMOVED***, []);
***REMOVED***
