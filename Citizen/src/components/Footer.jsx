import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
      <div className="footer-brand">
        <div className="logo-text">
            <img src={logo} alt="Crime Portal Logo" className="footer-logo" />
            <div className="brand-text">
                <h3>Crime Portal</h3>
                <p>
                    Our Crime Monitoring Portal provides real-time crime data and empowers citizens 
                    to report incidents. Together, we enhance public safety and foster community collaboration.
                </p>
            </div>
        </div>
      </div>


        <div className="footer-links">
          <div>
            <h4>Pages</h4>
            <ul>
              <li><a href="/">Landing Page</a></li>
              <li><a href="/home">Home</a></li>
              <li><a href="/file-fir">Request FIR</a></li>
              <li><a href="/my-complaints">My Complaints</a></li>
              <li><a href="/dashboard">Crime Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4>Emergency Contacts</h4>
            <ul>
              <li>Police: 100</li>
              <li>Women Helpline: 1091</li>
              <li>Ambulance: 102</li>
              <li>Cyber Crime: 155260</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Crime Portal 2024.</p>
        <div>
          <a href="/">Privacy Policy</a> | <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
