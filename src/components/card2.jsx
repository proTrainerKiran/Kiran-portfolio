import React from "react";
import "./Card.css";
import { Link } from "react-scroll";

const Card2 = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>1-on-1 Online</h2>
        <p>2 days/1hr</p>
      </div>
      <hr className="separator-line" />
      <div className="card-body">
        <p>5 days/week - 1 hr/day - Home/Gym training</p>
        <ul className="features-list">
          <li>✅ Strength Training</li>
          <li>✅ Cardio</li>
          <li>✅ Customized workout</li>
          <li>✅ Flexible Timing</li>
          <li>✅ Expert Guidance</li>
          <li>✅ Personalized Diet plan</li>
        </ul>
      </div>
      <div className="card-footer">
        <Link to="enquiry">
          {" "}
          <button className="join-now-btn">
            Join Now <span>→</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
