import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/K logo.png';

function Footer() {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1b0a03' }}>
      <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
      <div>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <FaInstagram size={30} color="white" />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <FaWhatsapp size={30} color="white" />
        </a>
        <a href="mailto:youremail@example.com" style={{ margin: '0 10px' }}>
          <FaEnvelope size={30} color="white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
