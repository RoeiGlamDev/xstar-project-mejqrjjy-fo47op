import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
      <header style={{ backgroundColor: 'orange', padding: '10px', textAlign: 'center' }}>
        <h1 style={{ color: 'red' }}>VidNexus Pricing</h1>
      </header>
      <main style={{ margin: '20px' }}>
        <section>
          <h2>Choose Your Plan</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ border: '1px solid orange', padding: '10px', width: '30%' }}>
              <h3>Basic Plan</h3>
              <p>Price: $19/month</p>
              <p>Features: AI video creation, 720p resolution</p>
              <button style={{ backgroundColor: 'orange', color: 'white' }}>Select</button>
            </div>
            <div style={{ border: '1px solid orange', padding: '10px', width: '30%' }}>
              <h3>Pro Plan</h3>
              <p>Price: $39/month</p>
              <p>Features: AI video creation, 1080p resolution, custom templates</p>
              <button style={{ backgroundColor: 'orange', color: 'white' }}>Select</button>
            </div>
            <div style={{ border: '1px solid orange', padding: '10px', width: '30%' }}>
              <h3>Enterprise Plan</h3>
              <p>Price: $99/month</p>
              <p>Features: AI video creation, 4K resolution, priority support</p>
              <button style={{ backgroundColor: 'orange', color: 'white' }}>Select</button>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: 'orange', padding: '10px', textAlign: 'center' }}>
        <p>© 2023 VidNexus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;