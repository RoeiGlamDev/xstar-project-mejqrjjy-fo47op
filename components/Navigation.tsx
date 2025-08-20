import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming you have a CSS file for styles

const Navigation: React.FC = () => {
    return (
        <nav className="navigation" style={{ backgroundColor: 'orange', padding: '1rem' }}>
            <div className="logo" style={{ color: 'white', fontSize: '1.5rem' }}>
                VidNexus
            </div>
            <ul className="nav-links" style={{ listStyle: 'none', display: 'flex', gap: '2rem' }}>
                <li>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                </li>
                <li>
                    <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;