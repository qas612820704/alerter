import React, { useEffect ***REMOVED*** from 'react';
import Layout from '../layout';
import { useIsLogin ***REMOVED*** from '../hooks';
import { navigate ***REMOVED*** from 'gatsby';

export default function Index() {
  const isLogin = useIsLogin();

  if (!isLogin) {
    useEffect(() => {
      navigate('/login');
    ***REMOVED***);
  ***REMOVED***

  return (
    <Layout>
      Hello World!
    </Layout>
  )
***REMOVED***
