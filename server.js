const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const serverDir = path.join(__dirname, 'server');

// Run npm install in the server directory to make sure dependencies are there
try {
  console.log('Installing dependencies in server folder...');
  execSync('npm install', { cwd: serverDir, stdio: 'inherit' });
} catch (error) {
  console.error('Failed to install dependencies:', error);
}

// Start the actual server
console.log('Starting server from server/index.js...');
require('./server/index.js');
