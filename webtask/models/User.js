import { model, Schema } from 'mongoose';

const User = Schema({
  _id: String,
  email: String,
  name: String,
  picture: String,
})

export default model('User', User);
