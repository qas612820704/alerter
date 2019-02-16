import {
  setAuthInfoMessage,
  setAuthErrorMessage
} from './messages';

const UPDATE_AUTH = 'UPDATE_AUTH';
const CLEAR_AUTH = 'CLEAR_AUTH';

const initialState = {
  accessToken: '',
  idToken: '',
  expiresAt: Date.now(),
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        ...state,
        ...action.payload,
      }
    case CLEAR_AUTH:
      return initialState;
    default:
      return state;
  }
}

export function updateAuth(auth) {
  return {
    type: UPDATE_AUTH,
    payload: auth,
  };
}

export function clearAuth() {
  return { type: CLEAR_AUTH };
}

export function authentication() {
  return async (dispatch, getState, apis) => {
    try {
      dispatch(
        setAuthInfoMessage('parsing authentication callback...')
      );

      const auth = await apis.authentication();
      const { accessToken, idToken, expiresIn } = auth;

      dispatch(
        updateAuth({
          accessToken,
          idToken,
          expiresAt: Date.now() + expiresIn * 1000,
        })
      );

      dispatch(
        setAuthInfoMessage('parsing authentication callback done')
      );

      return auth;
    } catch (err) {
      dispatch(
        setAuthErrorMessage(`${err.name} — ${err.message}`)
      );
      throw err;
    }
  }
}

export function setAccessTokenToAxios(accessToken) {
  return async (dispatch, getState, apis) => {
    dispatch(
      setAuthInfoMessage('set accessToken to axios...')
    );

    apis.axiosSetHeaders({ 'Authorization': `Bearer ${accessToken}`});

    dispatch(
        setAuthInfoMessage('set accessToken to axios done')
    );
  }
}

export function registerIfNeeded(auth) {
  return async (dispatch, getState, apis) => {
    dispatch(
      setAuthInfoMessage('register if needed...')
    );

    let profile;
    try {
      profile = await apis.register(auth);

    } catch (err) {
      dispatch(
        setAuthErrorMessage(`${err.name} ${err.message}`)
      );

      throw err;
    }

    dispatch(
      setAuthInfoMessage('register if needed done')
    );

    return profile;
  }
}

export default auth;
