import React, { useCallback ***REMOVED*** from 'react';
import styled from '@emotion/styled';
import Layout from '../layout';
import { login ***REMOVED*** from '../apis';

const LoginBtn = styled.button`
  border: 0;
  background: none;
  color: var(--blue);
  text-decoration: underline;
`;

export default function Index() {
  const handleLogin = useCallback(() => login());

  return (
    <Layout>
      <h1>River — <small style={{ color: 'var(--secondary-color)' ***REMOVED******REMOVED***>Read it forever!</small></h1>
      <p>
        Please
        <LoginBtn onClick={handleLogin***REMOVED***>log in</LoginBtn>
        to use this application.
      </p>
    </Layout>
  )
***REMOVED***
