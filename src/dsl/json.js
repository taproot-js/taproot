const {all, pipe, values} = require('ramda');
const precondition = require('../util/precondition');
const { MODEL } = require('../constants/dsl');
const { dslParseError } = require('../util/errors');
const { isString, isObject, isFunction } = require('../util/types');

function json(modelName, modelSpec) {
  const validSpec = pipe(
    values,
    all(isFunction)
  )(modelSpec); 

  if (!validSpec) {
    return dslParseError('json');
  } 

  return {
    type: MODEL,
    name: modelName,
    spec: modelSpec
  };
}

module.exports = precondition(
  [isString, isObject],
  () => dslParseError('json'),  
  json
);

