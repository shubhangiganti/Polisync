import React from 'react';
import './Home.css';
import logo from '../../assets/logo.png';
import { FaRobot } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Crime Portal Logo" className="logo-icon" />
          <span className="logo-text">Crime Portal</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Crime Reports</a></li>
            <li><a href="/">Crime Response</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Report, Track, Stay Safe - For a Safer Tomorrow</h1>
        <p>Safeguarding Together: Your Bridge to a Secure Environment</p>

        <div className="features">
          <button>Request to File FIR</button>
          <button>My Complaints</button>
          <button>Crime Dashboard</button>
        </div>
      </section>

      {/* Chatbot */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#EB5E28',
        color: '#fff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
      }}>
        <FaRobot size={24} />
      </div>

    </div>
  );
};

export default Home;
