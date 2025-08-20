import React from 'react';
import './layout.css'; // Import custom styles

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout" style={{ backgroundColor: 'white', color: 'black' }}>
      <header style={{ backgroundColor: 'orange', padding: '10px' }}>
        <h1 style={{ color: 'red' }}>VidNexus</h1>
      </header>
      <main style={{ padding: '20px' }}>
        {children} // Render child components
      </main>
      <footer style={{ backgroundColor: 'orange', padding: '10px', textAlign: 'center' }}>
        <p style={{ color: 'red' }}>© 2023 VidNexus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;