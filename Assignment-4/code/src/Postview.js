import React, { useEffect, useState } from 'react';
import './Postview.css';

const Postview=()=> {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3004/user")
    .then((request)=>request.json())
    .then((response)=>setData(response));
  },[]);
  return (
    <>
    <div className="site-container">
      <div className='header'>
        <div className='instagran-logo-cintainer'>
        <img className='instagram-logo' src='Images/instagramLogo.png' alt='logo'></img>
        </div>

        <div className='camera-icon-container'>
        <img className='camera-icon' src='Images/camera.png' alt='camera-icon'></img>
        </div>
    
      </div>
      
    </div>
        {data.map((value,index)=>{
          return(
            <div className='main-containter' key={index}>
              		<div className='post'>
                  
                  <div className='name-location'>
                    <strong className='name'>{value.name}</strong>
                    <label className='location'>{value.location}</label>
                  </div>

                  <div className='three-dot-container'>
                    <strong className='three-dot'>...</strong>
                  </div>

              </div>

              <div className='post-image-container'>
                <img src={value.PostImage} alt='Post-img' className='post-img'></img>
              </div>
              
              <div className='activity-container'>
                 
                 <div className='activity-buttom'>
                   <img className='heart' src='Images/heart.png' alt='heart'></img>
                   <img className='comment' src='Images/comment.png' alt='comment'></img>
                   <img className='send' src='Images/send.png' alt='send'></img>
                 </div>

                 <div className='date-container'>
                    <label className='Date'>{value.date}</label>
                 </div>

              </div>

              <div className='description-container'>
                <label className='like-count'>{value.likes}</label>
                <strong className='deccription-details'>{value.description}</strong>
              </div>

              
            </div>
            
          )
        })}

    </>
  );
};

export default Postview;


