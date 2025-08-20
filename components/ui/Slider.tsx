'use client';

import React, { useState } from 'react';
import './Slider.css'; // Assuming you will create a CSS file for styling

const Slider: React.FC = () => {
    const [value, setValue] = useState(50); // Default value

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div className="slider-container" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className="slider"
                style={{ accentColor: 'orange' }} // For modern browsers
            />
            <div className="slider-value" style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>
                {value}%
            </div>
        </div>
    );
};

export default Slider;