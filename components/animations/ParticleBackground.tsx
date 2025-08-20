'use client';

import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particles: { x: number; y: number; radius: number; color: string; }[] = [];
        const colors = ['#FF4500', '#FF6347', '#FFFFFF']; // orange, red, white

        const createParticle = () => {
            const radius = Math.random() * 5 + 1;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push({ x, y, radius, color });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, index) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                particle.y += 1; // gravity effect
                if (particle.y > canvas.height) particles.splice(index, 1); // remove off-screen particles
            });
            requestAnimationFrame(animate);
        };

        for (let i = 0; i < 100; i++) createParticle(); // create initial particles
        animate();

        return () => {
            particles.length = 0; // cleanup
        };
    }, []);

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default ParticleBackground;