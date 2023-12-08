import React from "react";
import { Link } from "react-router-dom";
import './style/navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1 className="logo">Your Logo</h1>
      
      <ul className="nav-links">
      
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/test">Testimonials</Link></li>
        <li><Link to="/login" className="login-button">Login</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
