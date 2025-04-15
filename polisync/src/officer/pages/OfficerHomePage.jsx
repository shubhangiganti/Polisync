import React from 'react';
import './OfficerHomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Header.css';
import '../components/Footer.css';


const OfficerHomePage = () => {
  return (
    <div className="officer-hero">
      <div className="officer-hero-content">
        <h1 className="hero-title">Protect, Serve, Ensure Safety</h1>
        <p className="hero-subtitle">Empowering Officers for a Safer Tomorrow</p>
        <div className="hero-buttons">
          <button className="hero-button">View Dashboard</button>
          <button className="hero-button">View FIRs</button>
          <button className="hero-button">Manage Complaints</button>
          <button className="hero-button">Respond to Reports</button>
        </div>
      </div>
    </div>
  );
};

export default OfficerHomePage;
