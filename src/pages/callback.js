import React from 'react';
import { navigate, Link ***REMOVED*** from 'gatsby';
import Loading from '../components/Loading';
import {
  useAuthMessage,
  useDispatchAuthentication
***REMOVED*** from '../hooks';

export default function Callback({ location ***REMOVED***) {

  useDispatchAuthentication()
    .then(auth => {
      navigate('/');
    ***REMOVED***)
    .catch(() => {
      navigate('/login');
    ***REMOVED***);

  const { info, error ***REMOVED*** = useAuthMessage();

  return (
    <Loading>
      { !error && info && <Loading.Info>{info***REMOVED***</Loading.Info>***REMOVED***
      { error && (
        <Loading.Error>
        { error ***REMOVED*** <Link to='/login'>back to log in!</Link>
        </Loading.Error>
      )***REMOVED***
    </Loading>
  );
***REMOVED***
