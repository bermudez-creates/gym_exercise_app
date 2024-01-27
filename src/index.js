//index.js connects application to the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//when building website
//start same basic html/css site
//logic is applied later above the static code
//this index file stays simple
//using js&html code in same code
//like a 3in1 combo with MUI youre able to stylize
