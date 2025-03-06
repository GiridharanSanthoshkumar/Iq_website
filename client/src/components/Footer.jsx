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
              <li><a>Abhiraj [General secretary]</a></li>
              <li><a>+91 79047 77069</a></li>
              <li><a>Cathlyn [Joint secretary]</a></li>
              <li><a>+91 98401 11601</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="link-group">
            <h3>WEB TEAM</h3>
            <ul>
              <li><a >Giridharan S [Web Dev]</a></li>
              <li><a >BarathKumar [Web Dev]</a></li>
              <li><a >Sandhiya [UI Designer]</a></li>
              <li><a >Preethi [UI Designer]</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="link-group">
            <h3>SOCIALS</h3>
            <div className="social-icons">
          
             <a href="mailto:gctcsea@gct.ac.in" target="blank" className="text-gray-400 hover:text-white">
                <i class="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i>
              </a>
             <a href="https://www.instagram.com/gctcsea" target="blank"  className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram" style={{ color: "#ffffff" }}></i>
              </a>
               <a href="https://www.linkedin.com/company/cseagct/" target="blank"  className="text-gray-400 hover:text-white">
                <i class="fa-brands fa-linkedin" style={{ color: "#ffffff" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
