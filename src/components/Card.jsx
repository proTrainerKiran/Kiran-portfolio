import React from "react";
import "./Card.css";
import bestForYou from "../assets/Best for you badge.png";
import { Link } from "react-scroll";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>1-on-1 Online</h2>
        <p>5 days/1hr</p>
        <img
          src={bestForYou}
          alt="Best for you"
          className="best-for-you-icon"
        />
      </div>
      <hr className="separator-line" />
      <div className="card-body">
        <p>5 days/week - 1 hr/day - Home/Gym training</p>
        <ul className="features-list">
          <li>✅ Strength Training</li>
          <li>✅ Cardio</li>
          <li>✅ Customized intensity levels</li>
          <li>✅ Flexible Timing</li>
          <li>✅ Expert Guidance</li>
          <li>✅ Personalized Diet plan</li>
        </ul>
      </div>
      <div className="card-footer">
        <Link to="enquiry">
          {" "}
          <button className="join-button">
            Join Now <span>→</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
