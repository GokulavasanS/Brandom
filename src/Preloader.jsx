import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader">
        <span className="text">Brandom</span>
      </div>
    </div>
  );
};

export default Preloader;
