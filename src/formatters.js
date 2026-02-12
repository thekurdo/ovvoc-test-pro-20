const _ = require('lodash');

function toTable(items, columns) {
  const headers = columns || Object.keys(_.first(items) || {});
  const rows = items.map(item => headers.map(h => String(item[h] || '')));
  return { headers, rows };
}

function toKeyValue(obj) {
  return _.pairs(obj).map(([k, v]) => `${k}=${v}`).join(', ');
}

function summarize(items, field) {
  const values = _.pluck(items, field);
  return { count: values.length, unique: _.uniq(values).length, first: _.first(values) };
}

module.exports = { toTable, toKeyValue, summarize };
