import wrapRedux from './src/layout/wrapRedux';

export const wrapRootElement = wrapRedux;

export const onClientEntry = () => {
  localStorage.debug = 'alerter:*';
***REMOVED***
