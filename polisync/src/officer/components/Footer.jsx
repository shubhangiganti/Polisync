import React from 'react';
import './Footer.css';
// Inside header.js and footer.js
console.log("Header component loaded!");
console.log("Footer component loaded!");

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Crime Portal</h3>
        <p>Real-time crime monitoring and response system.</p>
      </div>
      <div>
        <h4>Pages</h4>
        <p>Landing Page</p>
        <p>Home</p>
        <p>Contact</p>
      </div>
      <div>
        <h4>Emergency Contacts</h4>
        <p>Police: 100</p>
        <p>Women Helpline: 1091</p>
      </div>
    </footer>
  );
};

export default Footer;
