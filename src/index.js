import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Detect if running locally
const isLocal =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

// Initialize Google Analytics with the correct cookie domain
ReactGA.initialize('G-0WXGCVYXSP', {
  gaOptions: {
    cookie_domain: isLocal ? 'none' : 'jshortiz.github.io',
  },
});

// Send initial pageview
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
