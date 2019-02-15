import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import { rhythm ***REMOVED*** from './typography';
import './theme.css';

const Wrapper = styled.div`
  margin: auto;
  max-width: ${rhythm(24)***REMOVED***
`;

export default function Layout({ children ***REMOVED***) {
  return (
    <div>
      <Header />
      <Wrapper>
      { children ***REMOVED***
      </Wrapper>
    </div>
  );
***REMOVED***
