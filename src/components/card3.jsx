import React from "react";
import "./Card.css";
import { Link } from "react-scroll";
const Card3 = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Diet Planning and Guidance</h2>
        
      </div>
      <hr className="separator-line" />
      <div className="card-body">
        <p>45 days Diet Char</p>
        <ul className="features-list">
          <li>✅ Personalized Meals plan</li>
          <li>✅ Balanced Nutrition</li>
          <li>✅ Weight Management</li>
          <li>✅ Portion Control Guidance</li>
        </ul>
      </div>
      <div className="card-footer">
      <Link to="enquiry"> <button className="join-now-btn">
          Enquire Now <span>→</span>
        </button> </Link>
      </div>
    </div>
  );
};

export default Card3;