const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck= auth({
    audience: 'https://website-api', // Remove the curly braces
    issuerBaseURL: 'https://dev-8n6m6du47nnepx5v.eu.auth0.com/',
      tokenSigningAlg: 'RS256',
  });

module.exports = jwtCheck;