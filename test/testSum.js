const assert = require('assert');

const sum = function(a, b) {
  return a + b;
};

describe('sum', () => {
  it('should add two positive number', () => {
    const result = sum(1, 3);
    assert.equal(result, 4);
  });
});
