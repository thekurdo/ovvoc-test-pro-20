const _ = require('lodash');

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = _.first(lines).split(',').map(_.trim);
  const rows = _.rest(lines).map(line => {
    const values = line.split(',').map(_.trim);
    return _.object(headers, values);
  });
  return rows;
}

function parseKeyValue(text) {
  const pairs = text.split(',').map(pair => {
    const [key, value] = pair.split('=').map(_.trim);
    return [key, value];
  });
  return _.object(pairs);
}

module.exports = { parseCSV, parseKeyValue };
