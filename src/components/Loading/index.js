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

function Loading({ children ***REMOVED***) {
  return (
    <PerfectCenter>
      <div style={{ textAlign: 'center' ***REMOVED******REMOVED***>
        <img src={loading***REMOVED*** alt="loadding..." />
        { children ***REMOVED***
      </div>
    </PerfectCenter>
  )
***REMOVED***

function OnError({ children ***REMOVED***) {
  return <pre style={{ color: 'var(--red)' ***REMOVED******REMOVED***>{children***REMOVED***</pre>
***REMOVED***

function OnInfo({ children ***REMOVED***) {
  return <pre>{children***REMOVED***</pre>
***REMOVED***


Loading.Error = OnError;
Loading.Info = OnInfo;

export default Loading;
