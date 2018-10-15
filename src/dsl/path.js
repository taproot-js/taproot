const { PATH } = require('../constants/dsl');
const contract = require('../util/contract');
const { isString, isArray } = require('../util/types');
const { dslParseError } = require('../util/errors');

function path(path, children) {

  return {
    type: PATH,
    path,
    children
  }
}

module.exports = contract(
  [isString, isArray], 
  () => dslParseError('path'), 
  path
);
