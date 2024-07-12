import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'dotenv/config';
const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-8n6m6du47nnepx5v.eu.auth0.com"
    clientId="iecvHTBu2LE0lidVS7laxdMEnNdH6G6x"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


