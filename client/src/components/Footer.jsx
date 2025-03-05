import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer" id ="contact">
      <div className="footer-container">
        <h2 className="footer-title">Contact</h2>
        <p className="footer-text">
          <span className="label">General Secretary:</span> 
          <span className="contact">Abhiraj Singh - 98765 43210</span>
        </p>
        <p className="footer-text">
          <span className="label">Joint Secretary:</span> 
          <span className="contact">Cathlyn Jeba Goldy - 87654 32109</span>
        </p>
        <div className="footer-bottom">
          <p>&copy; 2025 Event Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
