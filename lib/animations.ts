import { keyframes } from 'styled-components';

// Define keyframes for fade in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Define keyframes for slide in animation
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Define keyframes for pulse animation
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Create animation styles
export const animations = {
  fadeIn: `${fadeIn} 0.5s ease-in-out`,
  slideIn: `${slideIn} 0.5s ease-in-out`,
  pulse: `${pulse} 1s infinite`,
}; 

export default animations;