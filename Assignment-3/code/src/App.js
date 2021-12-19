import React from 'react';
//import logo from './logo.svg';
import './App.css';


//var arrow="<"
function App(props) {
  debugger;
  const{appointment}=props;
  return (
    <div className="site-container">
    {/* Start Your code here */

    <div className='main-container'>
    <header className='header'>
    <div className='title-container'>
      <h3>{appointment.name}</h3>
      <label className='title-label'>{appointment.employeeId}</label>
    </div>
    <div className='print-button-container'>
      <button className='btn' type='button'>Print</button>
    </div>
    </header>
    <div className='customer-info'>
    <h5>Apointment : <label className='customer-info-label'>{appointment.appointment}</label></h5>
    
    <h5>Email : <label className='customer-info-label'>{appointment.email}</label></h5>
    
    <h5>Phone : <label className='customer-info-label'>{appointment.phone}</label></h5>
    
    </div>
    <div className='order-info'>
      <div className='status'>
      <h5>Status</h5>
      <label>
        <ul>
          <li>In progress</li>
        </ul>
      </label>
      </div>
      <div className='door'>
      <h5>Door</h5>
      <label>Mark</label>
      </div>
      <div className='time'>
      <h5>Time</h5>
      <label>10:30 (16-12-2021)</label>
      </div>
    </div>
    <div className='product-list'>
      <div>
        <img className='avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='profile-img'></img>
      </div>
      <div className='product-bolt'>
      <h5>Boltaart bosbessen </h5>
      <label className='bolt-label'>meet Boltaart bosbessen </label>
      </div>
      

    </div>
    </div>
    }
    </div>
  );
}

export default App;

