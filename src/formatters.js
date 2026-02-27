const _ = require('lodash');

function toTable(items, columns) {
  const headers = columns || Object.keys(_.head(items) || {});
  const rows = items.map(item => headers.map(h => String(item[h] || '')));
  return { headers, rows };
}

function toKeyValue(obj) {
  return _.toPairs(obj).map(([k, v]) => `${k}=${v}`).join(', ');
}

function summarize(items, field) {
  const values = _.map(items, field);
  return { count: values.length, unique: _.uniq(values).length, first: _.head(values) };
}

module.exports = { toTable, toKeyValue, summarize };
