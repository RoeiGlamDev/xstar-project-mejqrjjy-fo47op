import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
            <header style={{ backgroundColor: 'orange', padding: '10px', textAlign: 'center' }}>
                <h1 style={{ color: 'red' }}>Welcome to VidNexus</h1>
                <p>Your hub for creating AI videos</p>
            </header>
            <main>
                <section style={{ margin: '20px 0' }}>
                    <h2>Features</h2>
                    <ul>
                        <li>Create stunning AI-generated videos</li>
                        <li>Easy to use interface</li>
                        <li>Customizable templates</li>
                    </ul>
                </section>
                <section>
                    <h2>Get Started</h2>
                    <button style={{ backgroundColor: 'orange', color: 'white', padding: '10px' }}>
                        Sign Up Now
                    </button>
                </section>
            </main>
            <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: 'orange' }}>
                <p>&copy; 2023 VidNexus. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;