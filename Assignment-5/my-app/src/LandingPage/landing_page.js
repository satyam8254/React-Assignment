import React from "react";
import './Landing_page.css';
//import academy from './public/Images/10xacademy.png';
import { useNavigate } from "react-router-dom";
export default function Landing_page(){
    let navigate=useNavigate();
    return(
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

    <container>
        <div className="homelayout">
            <img className="iconpic" src='https://picsum.photos/id/237/200/300' alt="iconPic" />
            <div className="pagelink">
                <h1>10x Team 04</h1>
                <button className="Link" onClick={()=>
                navigate("/postview_page")}>Enter
                </button>
                
            </div>
        </div>
    </container>
        </>
    );
}
