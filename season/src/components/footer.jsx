import React from 'react';
import './style/footer.css'; // Import your custom CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href=".#">Home</a></li>
            <li><a href=".#">About Us</a></li>
            <li><a href=".#">Services</a></li>
            <li><a href=".#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href=".#" className="social-icon">Facebook</a>
          <a href=".#" className="social-icon">Twitter</a>
          <a href=".#" className="social-icon">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
