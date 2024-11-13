
import React, { useState } from 'react';
import { FaFacebookF, FaPhoneAlt, FaSearch, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <>
      <div className='navbar-container'>
        <div className='navbar'>
          <div className='container'>
            <ul className='list-right'>
              <MdEmail className='icons' /> holidaysplanner@gmail.com |
              <FaPhoneAlt className='icons' /> +250781299877
            </ul>
            <ul className='list-left'>
              <FaFacebookF className='icons' />
              <FaInstagram className='icons' />
              <FaTwitter className='icons' />
            </ul>
          </div>
        </div>

        <div className='navbar1'>
          {/* <ul className='list'>
            <li><NavLink to="/" exact activeClassName="active" onClick={handleLinkClick}>Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" onClick={handleLinkClick}>About</NavLink></li>
            <li><NavLink to="/destinations" activeClassName="active" onClick={handleLinkClick}>Destination</NavLink></li>
            <li><NavLink to="/tour" activeClassName="active" onClick={handleLinkClick}>Tour</NavLink></li>
          </ul> */}
        </div>

        <div className='navbar2'>
          <div className='nav-content'>
            <div className='logo'>
              <span className='h-text'>H</span>
              <span>oliday </span>
              <span className='p-text'>P</span>
              <span>lanners</span>
            </div>
            <div className='nav-right'>
              <button className='reserve-btn'>RESERVE</button>
              <button className='search-btn'>
                <FaSearch />
              </button>
              <button className='menu-btn' onClick={toggleMenu}>
                <div className='menu-icon'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <div className="menu-header">
            <div className='logo'>
              <span className='h-text'>H</span>
              <span>oliday </span>
              <span className='p-text'>P</span>
              <span>lanners</span>
            </div>
            <button className="close-btn" onClick={toggleMenu}>×</button>
          </div>
          <nav className="menu-nav">
            <ul>
              <li><NavLink to="/" exact activeClassName="active" onClick={handleLinkClick}>Home</NavLink></li>
              <li><NavLink to="/about" activeClassName="active" onClick={handleLinkClick}>About</NavLink></li>
              <li><NavLink to="/destinations" activeClassName="active" onClick={handleLinkClick}>Destination</NavLink></li>
              <li><NavLink to="/tour" activeClassName="active" onClick={handleLinkClick}>Tour</NavLink></li>
              <li><NavLink to="/contactus" activeClassName="active" onClick={handleLinkClick}>Contact Us</NavLink></li>
            </ul>
          </nav>
          <div className="menu-social">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

