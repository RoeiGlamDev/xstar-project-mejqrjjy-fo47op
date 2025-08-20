'use client';

import React, { useEffect, useRef } from 'react';

const InteractiveModel: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('webgl');
        if (!ctx) return;

        // Set clear color to orange
        ctx.clearColor(1.0, 0.5, 0.0, 1.0); // RGBA
        ctx.clear(ctx.COLOR_BUFFER_BIT);

        // Additional 3D rendering logic goes here

    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={800}
            height={600}
            style={{ backgroundColor: 'white', border: '2px solid red' }}
        />
    );
};

export default InteractiveModel;