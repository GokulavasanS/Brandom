import React, { useState, useEffect, useRef } from 'react';
import './Service.css';
import Web_design from './webdesign.png'

const servicesData = [
  { title: 'Web Design', logo: Web_design, details: 'We create responsive and stunning web designs.' },
  { title: 'Logo Design', logo: 'logo_design_logo.svg', details: 'Captivating logos to define your brand identity.' },
  { title: '3D Rendering', logo: '3d_rendering_logo.svg', details: 'High-quality 3D renderings for various needs.' },
  { title: 'Video Editing', logo: 'video_editing_logo.svg', details: 'Professional video editing services.' },
  { title: 'SEO Optimization', logo: 'seo_optimization_logo.svg', details: 'Boost your online presence with our SEO services.' },
  { title: 'Content Creation', logo: 'content_creation_logo.svg', details: 'Engaging content to attract and retain customers.' }
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carouselRef = useRef(null);

  const getSlideCount = () => (windowWidth > 768 ? 3 : 1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + getSlideCount()) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - getSlideCount() + servicesData.length) % servicesData.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  return (
    <div className="service-section">
      {!selectedService ? (
        <>
          <h1>Services</h1>
          <p>Welcome to our design solution company, where creativity meets strategy to elevate
            your brand. From stunning web designs to captivating logos, 3D renderings, and seamless video editing, 
            we craft solutions that resonate and drive results for your business.
            Let us transform your vision into a compelling reality that sells.</p>
          <div
            className="cards-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={carouselRef}
          >
            <div className="cards-wrapper" style={{ transform: `translateX(-${currentIndex * (100 / getSlideCount())}%)` }}>
              {servicesData.map((service, index) => (
                <div key={index} className="service-card" onClick={() => handleCardClick(service)}>
                  <img src={service.logo} alt={`${service.title} logo`} />
                  <h2>{service.title}</h2>
                </div>
              ))}
            </div>
            {isHovered && (
              <>
                <button className="prev-button" onClick={prevSlide}>&#10094;</button>
                <button className="next-button" onClick={nextSlide}>&#10095;</button>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="service-details">
          <button className="back-button" onClick={handleBackClick}>&larr; Back</button>
          <h2>{selectedService.title}</h2>
      <p>{selectedService.details}</p>
      <p>{selectedService.details}</p>
      <p>{selectedService.details}</p>
      <p>{selectedService.details}</p>
      <p>{selectedService.details}</p>
      <p>{selectedService.details}</p>
      <p>{selectedService.details}</p>
        </div>
      )}
    </div>
  );
};

export default Service;
