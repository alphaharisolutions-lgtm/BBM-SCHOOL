const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Build frontend if dist doesn't exist on the server
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  console.log('Building frontend...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to build frontend:', error);
  }
}

console.log('Starting server from server/index.js...');
require('./server/index.js');
