const _ = require('lodash');

function hasItem(arr, item) { return _.contains(arr, item); }
function findWhere(arr, props) { return _.find(arr, props); }
function pluckField(arr, field) { return _.pluck(arr, field); }
function groupByField(arr, field) { return _.groupBy(arr, field); }
function sortByField(arr, field) { return _.sortBy(arr, field); }

module.exports = { hasItem, findWhere, pluckField, groupByField, sortByField };
