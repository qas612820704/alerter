import React from 'react';
import styled from '@emotion/styled';
import loading from './loading.svg';

const PerfectCenter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function Loading({ children }) {
  return (
    <PerfectCenter>
      <div style={{ textAlign: 'center' }}>
        <img src={loading} alt="loadding..." />
        { children }
      </div>
    </PerfectCenter>
  )
}

function OnError({ children }) {
  return <pre style={{ color: 'var(--red)' }}>{children}</pre>
}

function OnInfo({ children }) {
  return <pre>{children}</pre>
}


Loading.Error = OnError;
Loading.Info = OnInfo;

export default Loading;
