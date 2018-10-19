const precondition = require('../util/precondition');
const { dslParseError } = require('../util/errors');
const {isString, isArray, isFunction} = require('../util/types');

function get(routeName, handlers, returnContract) {
  
} 

module.exports = precondition(
  [isString, isArray, isFunction], 
  () => dslParseError('get'), 
  get
);
