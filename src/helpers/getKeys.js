const trimQuotes = require('./trimQuotes');

module.exports = line => line.split(',').map(item => trimQuotes(item));
