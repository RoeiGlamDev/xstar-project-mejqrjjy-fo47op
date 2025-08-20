import React from 'react';

const README = () => {
  return (
    <div style={{ color: 'white', backgroundColor: 'red', padding: '20px' }}>
      <h1 style={{ color: 'orange' }}>VidNexus</h1>
      <p>Welcome to VidNexus, your go-to platform for creating AI-generated videos!</p>
      <h2>Features</h2>
      <ul>
        <li>AI Video Generation</li>
        <li>User-friendly Interface</li>
        <li>Customizable Templates</li>
        <li>High-Quality Output</li>
      </ul>
      <h2>Getting Started</h2>
      <p>To get started, clone the repository and install the dependencies:</p>
      <pre>
        <code>git clone https://github.com/yourusername/VidNexus.git</code>
      </pre>
      <pre>
        <code>cd VidNexus</code>
      </pre>
      <pre>
        <code>npm install</code>
      </pre>
      <h2>Usage</h2>
      <p>Run the application:</p>
      <pre>
        <code>npm start</code>
      </pre>
      <h2>Contributing</h2>
      <p>We welcome contributions! Please open an issue or submit a pull request.</p>
      <h2>License</h2>
      <p>This project is licensed under the MIT License.</p>
    </div>
  );
};

export default README;