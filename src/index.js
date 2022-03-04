import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PagesContext from './context/navbar'
import Root from './root/index.jsx'

ReactDOM.render(
  <React.StrictMode>
    <PagesContext>
    <Root/>
    </PagesContext>
  </React.StrictMode>,
  document.getElementById('root')
);
