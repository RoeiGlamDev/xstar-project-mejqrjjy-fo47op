import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styles

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section" style={{ backgroundColor: 'white', color: 'red' }}>
            <div className="container">
                <h2 style={{ color: 'orange' }}>Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="card">
                        <h3>Basic Plan</h3>
                        <p>Perfect for beginners.</p>
                        <span className="price">$19/month</span>
                        <button className="btn">Get Started</button>
                    </div>
                    <div className="card">
                        <h3>Pro Plan</h3>
                        <p>For advanced users.</p>
                        <span className="price">$49/month</span>
                        <button className="btn">Get Started</button>
                    </div>
                    <div className="card">
                        <h3>Enterprise Plan</h3>
                        <p>Custom solutions for businesses.</p>
                        <span className="price">$99/month</span>
                        <button className="btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;