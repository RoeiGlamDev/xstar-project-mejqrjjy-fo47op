import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const triggerPoint = window.innerHeight * 0.5; // Trigger animation at halfway down the viewport

    if (scrollPosition > triggerPoint) {
      setIsVisible(true); // Set visible to true if scrolled past trigger point
    } else {
      setIsVisible(false); // Reset visibility if scrolled back up
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Attach scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener on unmount
    };
  }, []);

  return isVisible; // Return visibility state
};

export default useScrollAnimation;