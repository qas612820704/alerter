import AXIOS from 'axios';
import { WEBTASK } from '../../../config';

const axios = AXIOS.create({
  baseURL: WEBTASK.uri,
});

export function setHeaders(headers) {
  axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    ...headers,
  }
}

export default axios;
