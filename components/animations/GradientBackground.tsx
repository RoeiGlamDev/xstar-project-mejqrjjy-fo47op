import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-color: orange;
  }
  50% {
    background-color: red;
  }
  100% {
    background-color: white;
  }
`;

const GradientBackgroundContainer = styled.div`
  width: 100%;
  height: 100vh; // Full viewport height
  animation: ${gradientAnimation} 5s ease infinite; // Animation duration and infinite loop
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />; // Render the gradient background
};

export default GradientBackground;