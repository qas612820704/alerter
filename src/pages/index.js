import React, { useEffect } from 'react';
import Layout from '../layout';
import { useIsLogin } from '../hooks';
import { navigate } from 'gatsby';

export default function Index() {
  const isLogin = useIsLogin();

  if (!isLogin) {
    useEffect(() => {
      navigate('/login');
    });
  }

  return (
    <Layout>
      Hello World!
    </Layout>
  )
};
