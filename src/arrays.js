const _ = require('lodash');

function getFirst(arr) { return _.head(arr); }
function getRest(arr) { return _.tail(arr); }
function getNames(items) { return _.map(items, 'name'); }
function unique(arr) { return _.uniq(arr); }
function flatten(arr) { return _.flatten(arr, true); }

module.exports = { getFirst, getRest, getNames, unique, flatten };
