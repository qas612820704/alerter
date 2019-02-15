import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import { expressJwtSecret ***REMOVED*** from 'jwks-rsa';
import { fromExpress ***REMOVED*** from 'webtask-tools';

import connectToDatabase from './database';
import User from './models/User';

import { AUTH0_CONFIG ***REMOVED*** from '../config';

connectToDatabase(() => {
  console.log('Database connected');
***REMOVED***);

const app = express();

if (!AUTH0_CONFIG.domain || !AUTH0_CONFIG.audience) {
  throw 'Make sure you have AUTH0_CONFIG.domain, and AUTH0_CONFIG.audience in your config file'
***REMOVED***

app.use(cors());
app.use(express.json());

app.use(jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_CONFIG.domain***REMOVED***/.well-known/jwks.json`
  ***REMOVED***),

  // Validate the audience and the issuer.
  audience: AUTH0_CONFIG.audience,
  issuer: `https://${AUTH0_CONFIG.domain***REMOVED***/`,
  algorithms: ['RS256']
***REMOVED***));

app.use(handleUnauthorizedError);
function handleUnauthorizedError(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      message: 'invalid token'
    ***REMOVED***);
  ***REMOVED***
***REMOVED***

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' ***REMOVED***);
***REMOVED***);

app.post('/register', async (req, res) => {
  const { sub: _id ***REMOVED*** = req.body;

  let user = await User.findOne({ _id ***REMOVED***);
  if (!user) {
    console.log(`${user***REMOVED*** not found: create one`);
    user = await new User({
      _id,
      ...req.body,
    ***REMOVED***).save();
  ***REMOVED***

  res.json(user);
***REMOVED***);

module.exports = fromExpress(app);
