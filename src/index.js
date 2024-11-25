import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'

import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Name from './components/Name/name';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" Component={Name}/>
          <Route exact path='/home' Component={App} />
        </Routes>
      </Router>
  </React.StrictMode>
);

