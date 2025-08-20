import React from 'react';

const Loading: React.FC = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: '#FF4500' // orange background
        }}>
            <div style={{ 
                color: '#FFFFFF', // white text
                fontSize: '24px', 
                fontWeight: 'bold' 
            }}>
                Loading VidNexus...
            </div>
            <div className="loader" style={{ 
                border: '8px solid #f3f3f3', // light grey
                borderTop: '8px solid #FF6347', // red
                borderRadius: '50%', 
                width: '50px', 
                height: '50px', 
                animation: 'spin 2s linear infinite', 
                marginLeft: '10px' 
            }} />
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loading;