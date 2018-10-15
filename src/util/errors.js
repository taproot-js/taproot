module.exports.dslParseError = (el) => {
  throw new Error('DSL Parse Error: Invalid arguments passed to ' + el);
};
