import React from 'react';
import './Card.css'; // Assuming there is a CSS file for styles

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ border: '1px solid orange', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
      <div className="card-content" style={{ padding: '16px', backgroundColor: 'white' }}>
        <h2 style={{ color: 'red' }}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;