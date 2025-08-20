import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section style={{ backgroundColor: 'white', padding: '40px', textAlign: 'center' }}>
            <h1 style={{ color: 'orange' }}>About VidNexus</h1>
            <p style={{ color: 'red' }}>
                At VidNexus, we harness the power of AI to create stunning videos that captivate and engage.
            </p>
            <p style={{ color: 'black' }}>
                Join us on our journey to revolutionize video production with cutting-edge technology and creativity.
            </p>
        </section>
    );
};

export default AboutSection;