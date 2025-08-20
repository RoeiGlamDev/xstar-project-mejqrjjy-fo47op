import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
    return (
        <Canvas style={{ background: 'linear-gradient(135deg, orange, red)' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {/* Add 3D models or shapes here */}
            <OrbitControls />
        </Canvas>
    );
};

export default Scene3D;