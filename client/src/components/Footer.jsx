import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* Left Section - Logo & Description */}
        <div className="footer-section">
          <h2 className="logo">INFOQUEST</h2>
          <p className="description">
           Gather all great minds together!! Code more , cherish more , embrace more.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-links">
          {/* Company */}
          <div className="link-group">
            <h3>CONTACT</h3>
            <ul>
              <li><a href="#">Abhiraj[General secretary]</a></li>
              <li><a href="#">+91 89401 234567</a></li>
              <li><a href="#">Cathlyn[Joint secretary]</a></li>
              <li><a href="#">+91 89401 234567</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="link-group">
            <h3>WEB TEAM</h3>
            <ul>
              <li><a href="#">Giridharan S [Web Dev]</a></li>
              <li><a href="#">BarathKumar [Web Dev]</a></li>
              <li><a href="#">Sandhiya [UI Designer]</a></li>
              <li><a href="#">Preethi [UI Designer]</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="link-group">
            <h3>SOCIALS</h3>
            <div className="social-icons">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
             <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
             <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
               <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
