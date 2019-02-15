import React from 'react'
import { StoreContext ***REMOVED*** from 'redux-react-hook';

import { createStore ***REMOVED*** from "../redux";

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element ***REMOVED***) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return (
    <StoreContext.Provider value={store***REMOVED***>
    { element ***REMOVED***
    </StoreContext.Provider>
  );
***REMOVED***
