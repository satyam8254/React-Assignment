import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const employee = {
  name: 'Satyam',
  location: 'India',
  bloodGroup: 'O+',
  age: 21,
  profileImg:'https://www.w3schools.com/howto/img_avatar.png'
  }
  

ReactDOM.render(
  <React.StrictMode>
    <App employee={employee}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

