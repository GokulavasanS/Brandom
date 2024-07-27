import React, { useEffect, useState } from "react";
import './About.css';
import MissionVector from './mission.svg';
import VisionVector from './vision.svg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.about_section');
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div className={`about_section ${isVisible ? 'animate' : ''}`}>
      <h1>About Us</h1>
      <p className="about-para">
        Our process always focuses on on-time delivery of quality software to
        the utmost satisfaction of our customer which has passed rounds of
        complex testing. To assist us through this process we utilize
        different tools and workflow to help track our progress.
      </p>
      <div className="mission_vision">
        <div className="mission">
          <div>
            <h2>Our Mission</h2>
            <p>
              To provide unparalleled customer satisfaction by delivering the best
              quality software possible in the shortest time possible.
            </p>
          </div>
          <img src={MissionVector} alt="Mission Vector" />
        </div>
        <div className="vision">
          <img src={VisionVector} alt="Vision Vector" />
          <div>
            <h2>Our Vision</h2>
            <p>
              To be a leader in software development and delivery by delivering
              high-quality software that meets the highest standards.
            </p>
          </div>
        </div>
      </div>
      <div className="values">
        <h2>Our Values</h2>
        <div className="values_horizontal">
          <div className="value_item">
            <p>Excellence</p>
          </div>
          <div className="value_item">
            <p>Transparency</p>
          </div>
          <div className="value_item">
            <p>Innovation</p>
          </div>
          <div className="value_item">
            <p>Continuous Improvement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
