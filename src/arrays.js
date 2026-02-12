const _ = require('lodash');

function getFirst(arr) { return _.first(arr); }
function getRest(arr) { return _.rest(arr); }
function getNames(items) { return _.pluck(items, 'name'); }
function unique(arr) { return _.uniq(arr); }
function flatten(arr) { return _.flatten(arr, true); }

module.exports = { getFirst, getRest, getNames, unique, flatten };
