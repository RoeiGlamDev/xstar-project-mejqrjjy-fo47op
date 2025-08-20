import autoprefixer from 'autoprefixer'; // Import autoprefixer for adding vendor prefixes
import cssnano from 'cssnano'; // Import cssnano for minifying CSS

export default {
  plugins: [
    autoprefixer(), // Add vendor prefixes
    cssnano({ preset: 'default' }) // Minify CSS
  ]
};