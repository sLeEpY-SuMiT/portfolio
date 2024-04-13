const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized:true // Add the domains for your image sources
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/', // Set the assetPrefix for GitHub Pages deployment
};
