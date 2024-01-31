// src/App.js

import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import logo from './images/holberton-logo.png';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        {/* OK button */}
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>Copyright {getFullYear()} - Holberton School</p>
      </div>
    </div>
  );
}

export default App;
