const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');

// Add error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Keep the process running
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  // Keep the process running
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Log the current working directory and environment
console.log('Current working directory:', process.cwd());
console.log('NODE_ENV:', process.env.NODE_ENV);

app.prepare().then(() => {
  createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(3000, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      return;
    }
    console.log('> Ready on http://localhost:3000');
  });
}).catch((err) => {
  console.error('Error during app preparation:', err);
}); 