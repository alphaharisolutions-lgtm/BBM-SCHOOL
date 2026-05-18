const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function log(message) {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(path.join(__dirname, 'server_debug.log'), logMessage);
  console.log(message);
}

log('App starting...');

// Build frontend if dist doesn't exist on the server
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  log('Building frontend...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    log('Frontend built successfully!');
  } catch (error) {
    log('Failed to build frontend: ' + error.message);
  }
}

log('Starting server from server/index.js...');
try {
  require('./server/index.js');
  log('Server required successfully!');
} catch (error) {
  log('CRITICAL ERROR requiring server/index.js: ' + error.message);
  log(error.stack);
}
