import React from 'react';

const FloatingElements: React.FC = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: 'white' }}>
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '100px',
                height: '100px',
                backgroundColor: 'orange',
                borderRadius: '50%',
                animation: 'float 3s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '15%',
                width: '120px',
                height: '120px',
                backgroundColor: 'red',
                borderRadius: '50%',
                animation: 'float 4s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '35%',
                width: '80px',
                height: '80px',
                backgroundColor: 'orange',
                borderRadius: '50%',
                animation: 'float 2.5s ease-in-out infinite'
            }} />
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translatey(0); }
                    50% { transform: translatey(-20px); }
                }
            `}</style>
        </div>
    );
};

export default FloatingElements;