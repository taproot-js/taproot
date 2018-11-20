const precondition = require('../util/precondition');
const { dslParseError } = require('../util/errors');
const { GET } = require('../constants/dsl');
const {isString, isArray, isFunction} = require('../util/types');

function get(routeName, handlers, returnContract) {
    
  return {
    type: GET,
    name: routeName,
    handlers,
    postcondition: returnContract
  };
} 

module.exports = precondition(
  [isString, isArray, isFunction], 
  () => dslParseError('get'), 
  get
);
