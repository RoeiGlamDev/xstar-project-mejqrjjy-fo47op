import * as THREE from 'three'; // Importing Three.js library

// Function to create a basic scene
export const createScene = () => {
    const scene = new THREE.Scene(); // Create a new scene
    scene.background = new THREE.Color(0xff4500); // Set background color to orange
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // Create a perspective camera
    camera.position.z = 5; // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a WebGL renderer
    renderer.setSize(width, height); // Set renderer size
    return renderer;
};

// Function to create a simple cube
export const createCube = () => {
    const geometry = new THREE.BoxGeometry(); // Create a box geometry
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Create a red material
    const cube = new THREE.Mesh(geometry, material); // Create a mesh with geometry and material
    return cube;
};

// Function to animate the cube
export const animateCube = (cube: THREE.Mesh, renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const animate = () => {
        requestAnimationFrame(animate); // Request animation frame
        cube.rotation.x += 0.01; // Rotate cube on x-axis
        cube.rotation.y += 0.01; // Rotate cube on y-axis
        renderer.render(scene, camera); // Render the scene
    };
    animate(); // Start animation
};

export default {
    createScene,
    createCamera,
    createRenderer,
    createCube,
    animateCube,
};