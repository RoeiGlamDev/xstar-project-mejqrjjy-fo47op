import React from 'react';

export type AnimationType = 'fade' | 'slide' | 'zoom' | 'bounce';

export interface AnimationProps {
    type: AnimationType;
    duration?: number; // in milliseconds
    delay?: number; // in milliseconds
    children: React.ReactNode;
}

const Animation: React.FC<AnimationProps> = ({ type, duration = 300, delay = 0, children }) => {
    const animationStyles = {
        fade: { animation: `fade ${duration}ms ease-in-out ${delay}ms forwards` },
        slide: { animation: `slide ${duration}ms ease-in-out ${delay}ms forwards` },
        zoom: { animation: `zoom ${duration}ms ease-in-out ${delay}ms forwards` },
        bounce: { animation: `bounce ${duration}ms ease-in-out ${delay}ms forwards` },
    };

    return <div style={animationStyles[type]}>{children}</div>;
};

export default Animation;