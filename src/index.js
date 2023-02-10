import React from 'react';
import{createRoot} from 'react-dom/client'
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//----------Old Way
//
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);


//----------New Way
//
const container = document.getElementById('root')
const root= createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
reportWebVitals();
