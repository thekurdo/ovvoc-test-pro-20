const _ = require('lodash');

function sum(arr) { return _.reduce(arr, (a, b) => a + b, 0); }
function avg(arr) { return arr.length ? sum(arr) / arr.length : 0; }
function min(arr) { return _.min(arr); }
function max(arr) { return _.max(arr); }
function countBy(items, field) { return _.countBy(items, field); }
function topN(items, field, n) {
  const sorted = _.sortBy(items, field).reverse();
  return sorted.slice(0, n);
}

module.exports = { sum, avg, min, max, countBy, topN };
