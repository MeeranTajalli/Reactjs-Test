// Footer.js
import React from 'react';


function Footer() {
  return (
    <footer className="primary-dark-bg text-white py-4 mt-5">
      <div className="container footer-container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="footer-text mb-2 mb-md-0">
          © 2025 BxLend. All rights reserved.
        </p>
        <p className="footer-text mb-2 mb-md-0">
          Powered by Meeran Tajalli.
        </p>
        <nav className="footer-links d-flex">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
