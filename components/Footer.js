import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
        <div className="logo">
         <img src="/assets/logo.png" alt="logo" />
        </div> 
      <p>© 2025 Gaming Accessories GM. All Rights Reserved</p>

      {/* Example Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/keyboard">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;

