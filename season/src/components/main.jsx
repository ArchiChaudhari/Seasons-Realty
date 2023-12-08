import React from 'react';
import './style/main.css';
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Welcome to Your Website</h1>
        <p>Your website's tagline or description goes here.</p>
        <Link to="/about" className="cta-button">Learn More</Link>
{/* <a href="/about" className="cta-button">Learn More</a> */}
      </div>

      
    </div>
  );
};

export default HomePage;
