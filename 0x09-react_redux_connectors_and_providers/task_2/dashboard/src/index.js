import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux';
import { Map } from 'immutable'
import uiReducer, { initialState } from './reducer'
import { createStore } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk))

export default store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </React.StrictMode>,    
  document.getElementById('root')
);
