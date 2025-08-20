import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
            <header style={{ backgroundColor: 'orange', padding: '10px' }}>
                <h1 style={{ color: 'red' }}>About VidNexus</h1>
            </header>
            <main>
                <section>
                    <h2>Welcome to VidNexus</h2>
                    <p>
                        At VidNexus, we specialize in creating AI-generated videos that captivate and engage audiences.
                    </p>
                </section>
                <section>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to revolutionize the way video content is created and consumed using cutting-edge AI technology.
                    </p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>
                        For inquiries, reach out to us at <a href="mailto:info@vidnexus.com">info@vidnexus.com</a>.
                    </p>
                </section>
            </main>
            <footer style={{ backgroundColor: 'orange', padding: '10px', textAlign: 'center' }}>
                <p>&copy; 2023 VidNexus. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;