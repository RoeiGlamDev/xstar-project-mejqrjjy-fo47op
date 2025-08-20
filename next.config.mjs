import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true, // Enables React's Strict Mode
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  webpack: (config) => {
    // Custom webpack configurations can be added here
    return config;
  },
  env: {
    PRIMARY_COLOR: '#FF4500', // Orange
    SECONDARY_COLOR: '#FF0000', // Red
    TERTIARY_COLOR: '#FFFFFF', // White
  },
});