import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
  audience: 'https://website-api',
  issuerBaseURL: 'https://dev-8n6m6du47nnepx5v.eu.auth0.com/',
  tokenSigningAlg: 'RS256',
});

export default jwtCheck;
