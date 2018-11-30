const http = require('http');

function serve(application, port, options) {
  const server = http.createServer({ port }, application);
  if (options.onListening) {
    server.on('listening', options.onListening);
  }
  return server;
}

module.exports = serve;
