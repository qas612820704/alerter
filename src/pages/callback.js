import React from 'react';
import { navigate, Link } from 'gatsby';
import Loading from '../components/Loading';
import {
  useAuthMessage,
  useDispatchAuthentication
} from '../hooks';

export default function Callback({ location }) {

  useDispatchAuthentication()
    .then(auth => {
      navigate('/');
    })
    .catch(() => {
      navigate('/login');
    });

  const { info, error } = useAuthMessage();

  return (
    <Loading>
      { !error && info && <Loading.Info>{info}</Loading.Info>}
      { error && (
        <Loading.Error>
        { error } <Link to='/login'>back to log in!</Link>
        </Loading.Error>
      )}
    </Loading>
  );
}
