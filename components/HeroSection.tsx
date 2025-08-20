import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section style={{ backgroundColor: 'orange', color: 'white', padding: '50px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', margin: '0' }}>Welcome to VidNexus</h1>
            <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
                Create stunning AI-generated videos effortlessly.
            </p>
            <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Get Started
            </button>
        </section>
    );
};

export default HeroSection;