// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notifications from './Notifications'; // Import the Notifications component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <div id="root-notifications">
        <Notifications />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
