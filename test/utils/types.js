const { isString, isArray } = require('../..');
const { expect } = require('chai');

describe('The utility type checkers', () => {

  it('should tell you if something is a string', () => {
    expect([undefined, null, [], {}, 1, '', 'hello'].map(isString))
      .to.eql([false, false, false, false, false, true, true]);
  });

  it('should tell you if something is an array', () => {
     expect([undefined, null, [], {}, 1, '', [1, 2, 3]].map(isArray))
      .to.eql([false, false, true, false, false, false, true]);
  });
});
