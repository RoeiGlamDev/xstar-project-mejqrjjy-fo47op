import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'VidNexus transformed my video creation process!',
    position: 'Content Creator',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'The AI technology is incredible and easy to use.',
    position: 'Marketing Specialist',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    feedback: 'I love how fast I can create engaging videos now.',
    position: 'Social Media Manager',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'white', padding: '40px' }}>
      <h2 style={{ color: 'orange' }}>What Our Users Say</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              border: '1px solid orange',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
            <p style={{ fontStyle: 'italic' }}>{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;