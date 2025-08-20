import React from 'react';
import './ParallaxSection.css'; // Assuming you will create a CSS file for styles

const ParallaxSection: React.FC = () => {
    return (
        <div className="parallax-section">
            <div className="parallax-background"></div>
            <div className="content">
                <h1 style={{ color: 'white' }}>Welcome to VidNexus</h1>
                <p style={{ color: 'orange' }}>Create stunning AI videos effortlessly.</p>
            </div>
        </div>
    );
};

export default ParallaxSection;