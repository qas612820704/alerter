import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { fromExpress } from 'webtask-tools';

import connectToDatabase from './database';
import User from './models/User';

import { AUTH0_CONFIG } from '../config';

connectToDatabase(() => {
  console.log('Database connected');
});

const app = express();

if (!AUTH0_CONFIG.domain || !AUTH0_CONFIG.audience) {
  throw 'Make sure you have AUTH0_CONFIG.domain, and AUTH0_CONFIG.audience in your config file'
}

app.use(cors());
app.use(express.json());

app.use(jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_CONFIG.domain}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: AUTH0_CONFIG.audience,
  issuer: `https://${AUTH0_CONFIG.domain}/`,
  algorithms: ['RS256']
}));

app.use(handleUnauthorizedError);
function handleUnauthorizedError(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      message: 'invalid token'
    });
  }
}

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/register', async (req, res) => {
  const { sub: _id } = req.body;

  let user = await User.findOne({ _id });
  if (!user) {
    console.log(`${user} not found: create one`);
    user = await new User({
      _id,
      ...req.body,
    }).save();
  }

  res.json(user);
});

module.exports = fromExpress(app);
