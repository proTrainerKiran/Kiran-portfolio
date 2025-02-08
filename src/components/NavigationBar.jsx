import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/nav.css";
import logo from "../assets/K logo.png";

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navContainer">
      <div className="menu-container">
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? "X" : "☰"}
        </div>
        <div className={`route-mapping ${isMenuOpen ? "show" : "hide"}`}>
          <ul>
            <li>
              <Link
                to="why"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                About Mr K
              </Link>
            </li>
            <li>
              <Link
                to="package"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Package
              </Link>
            </li>
            <li>
              <Link to="why-mrk" smooth={true} duration={500} onClick={toggleMenu}>
                Why Mr K
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="enquiry"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Enquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="logo">
        <img src={logo} alt="Mr K" />
      </div>

      <div>
        <Link to="enquiry" smooth={true} duration={500} onClick={toggleMenu}>
          <button className="join-button">Join Now</button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
