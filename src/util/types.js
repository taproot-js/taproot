const isString = s => typeof s === 'string';
isString.label = 'String';

const isArray = a => Array.isArray(a);
isArray.label = 'Array';

const isFunction = f => typeof f === 'function';
isFunction.label = 'Function';

module.exports = {  
  isString,
  isArray,
  isFunction
};

