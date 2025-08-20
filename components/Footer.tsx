import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'orange', color: 'white', padding: '20px', textAlign: 'center' }}>
            <div>
                <h4>VidNexus</h4>
                <p>Creating the future of AI videos.</p>
            </div>
            <div style={{ marginTop: '10px' }}>
                <a href="#" style={{ color: 'red', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a>
                <a href="#" style={{ color: 'red', textDecoration: 'none', margin: '0 10px' }}>Terms of Service</a>
            </div>
            <div style={{ marginTop: '10px' }}>
                <p>&copy; {new Date().getFullYear()} VidNexus. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;