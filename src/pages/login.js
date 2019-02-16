import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Layout from '../layout';
import { login } from '../apis';

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
      <h1>
        Alerter
        <span> </span>
        <small style={{ color: 'var(--secondary-color)' }}>
        — alerter it, yeah!
        </small>
      </h1>
      <p>
        Please
        <LoginBtn onClick={handleLogin}>log in</LoginBtn>
        to use this application.
      </p>
    </Layout>
  )
}
