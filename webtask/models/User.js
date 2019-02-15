import { model, Schema ***REMOVED*** from 'mongoose';

const User = Schema({
  _id: String,
  email: String,
  name: String,
  picture: String,
***REMOVED***)

export default model('User', User);
