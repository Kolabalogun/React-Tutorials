import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Home from './intro'
import Home from './cond/Home'

// import Index from './Missed/Index'

// import Index from './Action/Index'

// import Index from './API/Index'

// import Index from './Foem/TravelForm/index'

import Index from './Meme-Generator/index'

import MemeGenerator from './Meme-Generator/MemeGenerator'

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
