import React from 'react';
import { Link } from 'react-router-dom';
import './header-portfolio.css';

function Header() {
  return (
    <header className="header-container">
      {/* Header Content */}
      <div className="header-content">
        <div className="header-left">
          <img src={require('./mypic.png')} alt="Siddiqsha" className="header-profile-pic" />
        </div>
        <div className="header-right">
          <h1 className="header-title">
            Welcome to My Portfolio!
          </h1>
          <p className="header-description">
            Hi there! I'm Siddiqsha, a passionate Artificial Intelligence and Machine Learning enthusiast currently pursuing my second year of B.E. at Sri Eshwar College of Engineering. I specialize in creating innovative solutions in the realms of AI, Data analysis, and Full Stack.
          </p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="header-nav">
        <ul className="nav-links">
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/area">Area of Interest</Link>
          </li>
          <li>
            <Link to="/social-links">Social Links</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
