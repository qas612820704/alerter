import mongoose from 'mongoose';
import { MONGODB } from '../config';

if (!MONGODB.uri) {
  throw 'Make sure you have MONGODB.uri!';
}

export default function connect(callback) {
  const weasels = mongoose.connect(MONGODB.uri, {
    useNewUrlParser: true
  });

  mongoose.connection.once('open', callback);

  return weasels;
}
