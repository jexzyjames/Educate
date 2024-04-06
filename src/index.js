import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router/Router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Gallery from './Context/Gallery';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="8730680935-1ms0jbh61vh0afi75oedjn81m88p6pnp.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
