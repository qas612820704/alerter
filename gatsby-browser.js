import wrapRedux from './src/layout/wrapRedux';

export const wrapRootElement = wrapRedux;

export const onClientEntry = () => {
  if (process.env.NODE_ENV === 'development')
    localStorage.debug = 'alerter:*';
***REMOVED***
