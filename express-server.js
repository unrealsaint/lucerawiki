const express = require('express');
const path = require('path');
const fs = require('fs');
const next = require('next');

const distDir = __dirname;
const nextDir = path.join(distDir, '.next');
const publicDir = path.join(distDir, 'public');

if (!fs.existsSync(nextDir)) {
  console.error('ERROR: .next directory not found at', nextDir);
  process.exit(1);
}
if (!fs.existsSync(publicDir)) {
  console.error('ERROR: public directory not found at', publicDir);
  process.exit(1);
}

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Add error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

// Log the current working directory and environment
console.log('Current working directory:', process.cwd());
console.log('NODE_ENV:', process.env.NODE_ENV);

app.prepare().then(() => {
  const server = express();

  // Serve static files from the .next directory
  server.use('/_next', express.static(nextDir));

  // Serve static files from the public directory
  server.use(express.static(publicDir));

  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = 3000;
  server.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      return;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error during app preparation:', err);
}); 