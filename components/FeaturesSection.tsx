import React from 'react';
import './FeaturesSection.css'; // Assuming you have a CSS file for styles

const features = [
  {
    title: 'AI Video Creation',
    description: 'Easily create stunning videos using advanced AI technology.',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Intuitive design that makes video creation accessible for everyone.',
  },
  {
    title: 'Customizable Templates',
    description: 'Choose from a variety of templates to suit your needs.',
  },
  {
    title: 'Fast Processing',
    description: 'Generate videos in minutes with our powerful processing capabilities.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section" style={{ backgroundColor: 'white', padding: '2rem' }}>
      <h2 style={{ color: 'orange' }}>Features</h2>
      <div className="features-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {features.map((feature, index) => (
          <div key={index} className="feature-card" style={{ border: '1px solid red', borderRadius: '8px', padding: '1rem' }}>
            <h3 style={{ color: 'orange' }}>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;