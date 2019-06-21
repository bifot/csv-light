module.exports = (value) => {
  if (!value.startsWith('"')) {
    return value;
  }

  return value.substr(1, value.length - 2);
};
