const types = require('./src/util/types');

module.exports = {
   // DSL
   path: require('./src/dsl/path'),

  //Utils
  isString: types.isString,
  isArray: types.isArray
};
