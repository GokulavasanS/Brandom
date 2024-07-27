import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div>
      {/* <div className="footer">
        <img src="" alt="Logo" />
        <div className="nav-links">
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
      </div> */}
    </div>
  )
}

export default Footer
