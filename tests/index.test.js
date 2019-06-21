const { expect } = require('chai');
const parse = require('../src');
const examples = require('./examples');

it('should parse', () => {
  expect(parse(examples.source)).to.be.deep.equal(examples.results);
});
