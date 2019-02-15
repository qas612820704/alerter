import AXIOS from 'axios';
import { WEBTASK ***REMOVED*** from '../../../config';

const axios = AXIOS.create({
  baseURL: WEBTASK.uri,
***REMOVED***);

export function setHeaders(headers) {
  axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    ...headers,
  ***REMOVED***
***REMOVED***

export default axios;
