import React from 'react';

const TeamSection: React.FC = () => {
    return (
        <section style={{ backgroundColor: '#FF5733', padding: '50px 0', color: '#FFFFFF' }}> {/* Orange background */}
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '30px' }}>Meet Our Team</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <div style={{ margin: '15px', padding: '20px', backgroundColor: '#C70039', borderRadius: '10px', width: '200px' }}> {/* Red card */}
                        <h3>John Doe</h3>
                        <p>CEO</p>
                    </div>
                    <div style={{ margin: '15px', padding: '20px', backgroundColor: '#C70039', borderRadius: '10px', width: '200px' }}>
                        <h3>Jane Smith</h3>
                        <p>CTO</p>
                    </div>
                    <div style={{ margin: '15px', padding: '20px', backgroundColor: '#C70039', borderRadius: '10px', width: '200px' }}>
                        <h3>Emily Johnson</h3>
                        <p>CMO</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;