const { PATH } = require('../constants/dsl');
const precondition = require('../util/precondition');
const { isString, isArray } = require('../util/types');
const { dslParseError } = require('../util/errors');

function path(path, children) {

  return {
    type: PATH,
    path,
    children
  }
}

module.exports = precondition(
  [isString, isArray], 
  () => dslParseError('path'), 
  path
);
