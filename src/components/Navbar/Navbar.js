import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="navbar-container">
          <div className="brand-logo">
            <img src={logo} alt='logo' />
          </div>
          <div className="menu">
            <ul>
              <li><Link to=""><FaShoppingCart size='20px'></FaShoppingCart></Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link className='nav-btn' to="/signup">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;