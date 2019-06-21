const fs = require('fs');
const path = require('path');

module.exports = {
  source: fs.readFileSync(path.resolve('tests', 'examples', 'simple.csv'), { encoding: 'utf8' }),
  results: require('./simple.json'),
};
