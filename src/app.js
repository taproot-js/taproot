const url = require('url');



function app(routeTree, injections, options) {

  return function(req, res) {
    const headers = req.headers;
    const method = req.method;
    const requestUrl = url.parse(req.url, true);
  }
}

module.exports = app;
