const { curry } = require('ramda');

function contract(validators, toThrow, fn) {
  return function(...args) {
    const valid = validators.map((v, i) => v(args[i])).every(Boolean);
    
    if (valid) return fn.apply(null, args);

    toThrow();
  }
}

module.exports = curry(contract);
