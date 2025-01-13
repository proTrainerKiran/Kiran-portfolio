import React from 'react';
import meetyourcoach from '../assets/Meet your coach.png';
import { Link } from "react-scroll";

function WhyUser() {
  return (
    <div style={{ backgroundColor: '#1b0a03', fontFamily: 'Neohead', color: 'white', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '49.02px', letterSpacing: '0.02em', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', whiteSpace: 'nowrap' }}>
        Meet Your Coach
      </h1>
      <img src={meetyourcoach} alt="Meet your coach" style={{ width: '100%', height: 'auto', margin: '20px 0' }} />
      <p style={{ fontSize: '15px', fontWeight: '400', lineHeight: '1.5', letterSpacing: '0.02em', textAlign: 'left', margin: '20px 0' }}>
        Hey there, I'm Kiran, a certified fitness coach with over 3 years of experience, offering personalized online training to help you achieve your fitness goals from the comfort of your space. I believe fitness is about more than just exercise-it's about building confidence and enjoying the journey. My goal is to push you beyond your limits while keeping you motivated and comfortable. Whether you're looking to lose weight, gain strength, or stay active, I'm here to guide you every step of the way. Let's unlock your potential and create lasting change together.
      </p>
      <Link to="enquiry"> <button style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: '#9F0D0D', color: '#1b0a03', border: 'none', cursor: 'pointer' }}>
        Join Now 
      </button> </Link>
    </div>
  );
}

export default WhyUser;