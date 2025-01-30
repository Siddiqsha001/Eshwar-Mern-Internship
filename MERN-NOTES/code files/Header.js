import React from 'react';
import './Header.css'; // Optional for custom styling
function Header() {
  return (
    <header className="bg-light py-3 shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Profile Picture */}
        <div className="d-flex align-items-center">
          <img
            src="public\mypic.jpg" // Replace with your profile picture path
            alt="Profile"
            className="rounded-circle"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
          <h1 className="ms-3 mb-0">Siddiqsha</h1>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
