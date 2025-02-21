import React from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';
// Import Link from react-router-dom


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>  {/* Link to Home */}
        <li><Link to="/keyboard">Shop</Link></li>  {/* Link to Keyboard */}
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/ordered">Ordered</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

