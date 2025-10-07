import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Name */}
        <div className="logo-name">
          <img src="/logo192.png" alt="Logo" />
          <span className="site-name">RK Photography</span>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Portfolio</NavLink></li>
          <li> <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
