import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Specify the paths to all of the template files
  theme: {
    extend: {
      colors: {
        orange: '#FFA500', // Custom orange color
        red: '#FF0000',    // Custom red color
        white: '#FFFFFF',  // Custom white color
      },
    },
  },
  plugins: [],
};

export default config;