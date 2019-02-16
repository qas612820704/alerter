const SET_MESSAGE = 'SET_MESSAGE';

const initialState = {}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        [action.payload.type]: action.payload.message
      }
    default:
      return state;
  }
}

function setMessage(type, message = '') {
  return {
    type: SET_MESSAGE,
    payload: { type, message }
  };
}

export function setAuthInfoMessage(message) {
  return setMessage('auth:info', message);
}

export function setAuthErrorMessage(message) {
  return setMessage('auth:error', message);
}

export default messages;
