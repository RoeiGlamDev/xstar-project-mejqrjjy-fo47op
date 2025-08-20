import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ backgroundColor: 'orange', padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: 'white' }}>VidNexus</h1>
            <p style={{ color: 'red' }}>Create stunning AI videos effortlessly</p>
        </header>
    );
};

export default Header;