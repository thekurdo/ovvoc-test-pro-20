const _ = require('lodash');

function mapValues(obj, fn) { return _.mapValues(obj, fn); }
function mapKeys(obj, fn) { return _.mapKeys(obj, fn); }
function invertObj(obj) { return _.invert(obj); }
function defaults(obj, defs) { return _.defaults({}, obj, defs); }
function cloneObj(obj) { return _.cloneDeep(obj); }

module.exports = { mapValues, mapKeys, invertObj, defaults, cloneObj };
