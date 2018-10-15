const isString = s => typeof s === 'string';
isString.label = "String";

const isArray = a => Array.isArray(a);
isArray.label = "Array";

module.exports = {
    isString,
    isArray
};

