'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Distance of the reveal
      duration: 600, // Animation duration
      delay: 200, // Delay between animations
      easing: 'ease-in-out', // Easing function
      reset: true, // Reset animation on scroll
    });

    sr.reveal('.reveal', {
      interval: 200, // Interval between each reveal
    });
  }, []);

  return (
    <div>
      <h1 className="reveal" style={{ color: 'orange' }}>Welcome to VidNexus</h1>
      <p className="reveal" style={{ color: 'red' }}>
        Create stunning AI-generated videos effortlessly.
      </p>
      <button className="reveal" style={{ backgroundColor: 'white', color: 'orange' }}>
        Get Started
      </button>
    </div>
  );
};

export default ScrollRevealComponent;