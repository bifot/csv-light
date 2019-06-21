const { getKeys, trimQuotes, isBoolean, isNumber } = require('./helpers');

module.exports = (csv) => {
  const [names, ...lines] = csv.split('\n');
  const keys = getKeys(names);

  return lines.reduce((array, line) => {
    if (!line) {
      return array;
    }

    array.push(
      line.split(',').reduce((object, item, index) => {
        const key = keys[index];
        const value = trimQuotes(item);
        const isBool = isBoolean(value);
        const isInt = isNumber(value);

        if (isBool) {
          object[key] = value === 'true';
        } else if (isInt) {
          object[key] = +value;
        } else {
          object[key] = value;
        }

        return object;
      }, {}),
    );

    return array;
  }, []);
};
