import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="nav-links">
          <h1>Brandom</h1>
          <ul>
            <li className={active === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={active === '/about' ? 'active' : ''}>
              <Link to="/about">About</Link>
            </li>
            <li className={active === '/portfolio' ? 'active' : ''}>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className={active === '/services' ? 'active' : ''}>
              <Link to="/services">Services</Link>
            </li>
            <li className={active === '/contact' ? 'active' : ''}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="policy">
          <h2>Freelancing</h2>
          <ul>
            <li>
              <Link to="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="copyrights">
          <img src='./Blogo.svg' alt="Brandom Logo" />
          <p>Make websites simpler without effort at our hands.</p>
        </div>
      </div>
      <div className="footer-bottom">
      </div>
        <div className="copyright-text">
          <p>© 2024 Brandom, All Rights Reserved.</p>
        </div>
        
    </footer>
  );
};

export default Footer;
