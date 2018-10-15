const { ROOT } = require('../constants/dsl');
const { isString, isArray } = require('../util/types.js');
const { dslParseError } = require('../util/errors');
const contract = require('../util/contract');

function root(path, children) {
 
  return {
    type: ROOT,
    path,
    children
  };
}

module.exports =contract(
  [isString, isArray], 
  () => dslParseError('root'), 
  root
);

