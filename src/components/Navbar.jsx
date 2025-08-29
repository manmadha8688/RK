import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Name */}
        <div className="logo-name">
          <img src="/logo192.png" alt="Logo" />
          <span className="site-name">RK Photography</span>
        </div>
        {/* Nav Links */}
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
          <li className="dropdown">
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/services/wedding">Wedding Shoot</NavLink></li>
              <li><NavLink to="/services/birthday">Birthday Shoot</NavLink></li>
              <li><NavLink to="/services/prewedding">Pre-wedding Shoot</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
