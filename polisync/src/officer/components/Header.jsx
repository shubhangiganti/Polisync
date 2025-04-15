import React from 'react';
import './Header.css';

// Inside header.js and footer.js
console.log("Header component loaded!");
console.log("Footer component loaded!");

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Crime Portal</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/reports">Crime Reports</a>
        <a href="/response">Crime Response</a>
        <a href="/contact">Contact Us</a>
        <button className="navbar-button">Login</button>
        <button className="navbar-button register">Register</button>
      </nav>
    </header>
  );
};

export default Header;
