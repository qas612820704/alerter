import React from 'react';
import styled from '@emotion/styled';
import HeadRoom from 'react-headroom';
import { Link ***REMOVED*** from 'gatsby';
import { rhythm ***REMOVED*** from '../layout/typography';
import { useIsLogin, useUserProfile ***REMOVED*** from '../hooks';

const Room = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;

  * {
    margin: 0;
  ***REMOVED***

  img {
    margin: 0;
    height: ${rhythm(1)***REMOVED***
    border-radius: 50%;

  ***REMOVED***

  a {
    text-decoration: none;
  ***REMOVED***
`;

const BedRoom = styled.div`
  a {
    color: initial;
  ***REMOVED***
`;

const Balcony = styled.div`
  display: flex;

  a, span {
    padding-left: ${rhythm(0.5)***REMOVED***
  ***REMOVED***

  span {
    display: flex;
    align-items:center;

    img {
      margin-right: ${rhythm(0.25)***REMOVED***
    ***REMOVED***
  ***REMOVED***
`;

export default function Header() {
  const isLogin = useIsLogin();
  const profile = useUserProfile();

  return isLogin && profile && (
    <HeadRoom style={{ background: 'white', boxShadow: '0 0 8px #888888' ***REMOVED******REMOVED***>
      <Room>
        <BedRoom>
          <h2><Link to="/">Alerter</Link></h2>
        </BedRoom>
        <Balcony>
          <span>
            <img src={profile.picture***REMOVED*** alt="O"/>
            Hi, {profile.name***REMOVED***
          </span>
        </Balcony>
      </Room>
    </HeadRoom>
  )
***REMOVED***
