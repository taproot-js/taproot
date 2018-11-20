const {app, serve, root, get, isString, returns, json} = require('../..');

const hello = json('Hello Object', {hello: isString});

const helloHandler = () => hello({hello: 'World'});

const routes = root('/', [
  get('hello', [helloHandler], returns(hello))
]);

const injections = {};

const application = app('Hello World App', routes, injections);

const options = {
  onListening(server) {
    console.log(`${server.app.name} listening on port ${server.port}`);
  }
};

serve(application, 3000, options);


