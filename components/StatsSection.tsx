import React from 'react';
import './StatsSection.css'; // Assuming you have a CSS file for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section" style={{ backgroundColor: 'white', padding: '20px' }}>
            <h2 style={{ color: 'orange' }}>Our Stats</h2>
            <div className="stats-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'red' }}>1000+</h3>
                    <p style={{ color: 'orange' }}>Videos Created</p>
                </div>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'red' }}>500+</h3>
                    <p style={{ color: 'orange' }}>Satisfied Clients</p>
                </div>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'red' }}>24/7</h3>
                    <p style={{ color: 'orange' }}>Support Available</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;