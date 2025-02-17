// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; //store provider
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router
import './index.css'
import App from './App.jsx'
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
 </>
);
