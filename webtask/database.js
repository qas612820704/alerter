import mongoose from 'mongoose';
import { MONGODB ***REMOVED*** from '../config';

if (!MONGODB.uri) {
  throw 'Make sure you have MONGODB.uri!';
***REMOVED***

export default function connect(callback) {
  const weasels = mongoose.connect(MONGODB.uri, {
    useNewUrlParser: true
  ***REMOVED***);

  mongoose.connection.once('open', callback);

  return weasels;
***REMOVED***
