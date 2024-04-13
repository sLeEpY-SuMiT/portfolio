const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized:true // Add the domains for your image sources
  }, // Set the assetPrefix for GitHub Pages deployment
};
