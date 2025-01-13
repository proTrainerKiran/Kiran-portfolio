import React from 'react';
import usericon from '../assets/Mobile banner_with text.png';
import textbelowuser from '../assets/textbelowphoto.png';
import '../styles/AboutUser.css'; // Import the CSS file
import { Link } from "react-scroll";

function AboutUser() {
  return (
    <div className="about-user">
      <div className="image-container">
        <img src={usericon} alt="User Icon" className="user-icon" />
        <Link to="enquiry"><button className="overlay-button">Start your journey with 3 days free trail</button></Link> 
      </div>
      <img src={textbelowuser} alt="Text Below User" className="text-below-user" />
    </div>
  );
}

export default AboutUser;