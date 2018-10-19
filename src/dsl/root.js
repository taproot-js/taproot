const { ROOT } = require('../constants/dsl');
const { isString, isArray } = require('../util/types.js');
const { dslParseError } = require('../util/errors');
const precondition = require('../util/precondition');

function root(path, children) {
 
  return {
    type: ROOT,
    path,
    children
  };
}

module.exports = precondition(
  [isString, isArray], 
  () => dslParseError('root'), 
  root
);

