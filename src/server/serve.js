const http = require('http');

function serve(application, port, options) {
  const server = http.createServer({ port }, application);
}

module.exports = serve;
