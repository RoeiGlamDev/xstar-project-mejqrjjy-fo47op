import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section style={{ backgroundColor: 'white', padding: '50px', textAlign: 'center' }}>
            <h2 style={{ color: 'orange' }}>Get in Touch</h2>
            <p style={{ color: 'red' }}>We'd love to hear from you!</p>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    style={{ margin: '10px', padding: '10px', width: '300px' }} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    style={{ margin: '10px', padding: '10px', width: '300px' }} 
                    required 
                />
                <textarea 
                    placeholder="Your Message" 
                    style={{ margin: '10px', padding: '10px', width: '300px', height: '100px' }} 
                    required 
                />
                <button 
                    type="submit" 
                    style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactSection;