import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Project from './project';
import 'bootstrap/dist/css/bootstrap.css';

import vpt1 from './img/VPT/vpt1.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Project image={vpt1} title="Vita Power Tool" description ="This is a website used in my current job for helping and speeding up common tasks. The features includes:

Enquiring several Oracle and SQL database
Inspecting online applications to detect downtimes
Batch process to detect possible application failures
Online WS testing using Reflection" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
