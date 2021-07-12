import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


ReactDOM.render(
    <div className="cont">
    <p style={{marginLeft:-200}}>There are 4 counter component instances that can manage their own states.</p>
    <App />
    <App />
    <App />
    <App /></div>,document.getElementById('root')
);