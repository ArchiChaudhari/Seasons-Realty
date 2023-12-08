import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'; 

const contactNavbar = () => {
  return (
    <div className="navbar-container">
      <h1 className="logo">Your Logo</h1>
      
      <ul className="nav-links">
        
        <li><Link to="/">Home</Link></li>
       
        
      </ul>
    </div>
  );
};

export default contactNavbar;