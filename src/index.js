import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PagesContext from './context/navbar'
import Root from './root/index.jsx';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PagesContext>
        <Root/>
      </PagesContext>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
