const _ = require('lodash');

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = _.head(lines).split(',').map(_.trim);
  const rows = _.tail(lines).map(line => {
    const values = line.split(',').map(_.trim);
    return _.fromPairs(headers, values);
  });
  return rows;
}

function parseKeyValue(text) {
  const pairs = text.split(',').map(pair => {
    const [key, value] = pair.split('=').map(_.trim);
    return [key, value];
  });
  return _.fromPairs(pairs);
}

module.exports = { parseCSV, parseKeyValue };
