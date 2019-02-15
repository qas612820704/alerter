const UPDATE_PROFILE = 'UPDATE_PROFILE';

const initialState = {***REMOVED***
const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      ***REMOVED***
    default:
      return state;
  ***REMOVED***
***REMOVED***

export function updateProfile(profile) {
  return {
    type: UPDATE_PROFILE,
    payload: profile,
  ***REMOVED***
***REMOVED***

export default user;
