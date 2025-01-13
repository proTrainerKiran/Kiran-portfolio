import React from "react";
import "./UserCard.css";

const UserCard = () => {
  return (
    <div className="Usercard">
      <div className="Usercard-icon">
        <span>⚡</span> {/* Replace with the lightning bolt icon */}
      </div>
      <div className="Usercard-card-header">
        <h2>Certified Personal Trainer</h2>
      </div>
      <div className="Usercard-card-body">
        <p>
          Personalized workout plans and one-on-one attention from a certified
          trainer.
        </p>
      </div>
    </div>
  );
};

export default UserCard;
