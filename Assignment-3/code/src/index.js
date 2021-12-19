import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const appointment={
  name:'Satyam Kumar',
  employeeId:'00005152',
  appointment:'9:00 (16-12-2021)',
  email:'abcxyz@gmail.com',
  phone:'+91123456789'

}

ReactDOM.render(
  <React.StrictMode>
    <App appointment={appointment} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

