import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
            <header style={{ backgroundColor: 'orange', padding: '10px', textAlign: 'center' }}>
                <h1 style={{ color: 'red' }}>Contact VidNexus</h1>
            </header>
            <main style={{ margin: '20px' }}>
                <h2>Get in Touch</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" style={{ backgroundColor: 'orange', color: 'white' }}>
                        Send Message
                    </button>
                </form>
            </main>
            <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: 'orange' }}>
                <p>&copy; {new Date().getFullYear()} VidNexus. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactPage;