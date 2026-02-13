const _ = require('lodash');

function toPairs(obj) { return _.toPairs(obj); }
function fromEntries(pairs) { return _.fromPairs(pairs); }
function pick(obj, keys) { return _.pick(obj, keys); }
function omit(obj, keys) { return _.omit(obj, keys); }
function merge(a, b) { return _.merge({}, a, b); }

module.exports = { toPairs, fromEntries, pick, omit, merge };
