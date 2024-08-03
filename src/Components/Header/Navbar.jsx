import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div>
      <div className="navbar">
        <img src="./Blogo.svg" alt="Logo" />
        <div className="navmenu">
          <ul>
            <li className={active === '/' ? 'active' : ''}>
              <Link to="/">HOME</Link>
            </li>
            <li className={active === '/about' ? 'active' : ''}>
              <Link to="/about">ABOUT</Link>
            </li>
            <li className={active === '/portfolio' ? 'active' : ''}>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li className={active === '/services' ? 'active' : ''}>
              <Link to="/services">SERVICES</Link>
            </li>
            <li className={active === '/contact' ? 'active' : ''}>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="tabbar">
        <Link to="/" className={active === '/' ? 'tab active' : 'tab'}>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/about" className={active === '/about' ? 'tab active' : 'tab'}>
          <i className="fas fa-user"></i>
          <span>About</span>
        </Link>
        <Link to="/services" className={active === '/services' ? 'tab active' : 'tab'}>
          <i className="fas fa-user"></i>
          <span>services</span>
        </Link>
        <Link to="/portfolio" className={active === '/portfolio' ? 'tab active' : 'tab'}>
          <i className="fas fa-briefcase"></i>
          <span>Portfolio</span>
        </Link>
        <Link to="/contact" className={active === '/contact' ? 'tab active' : 'tab'}>
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
