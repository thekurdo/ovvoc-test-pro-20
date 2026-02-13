const _ = require('lodash');

function isEmpty(val) { return _.isEmpty(val); }
function isNumeric(val) { return _.isNumber(val) && !_.isNaN(val); }
function isNonEmptyString(val) { return _.isString(val) && val.length > 0; }
function hasAll(arr, items) { return items.every(i => _.includes(arr, i)); }
function isPlainObj(val) { return _.isPlainObject(val); }

module.exports = { isEmpty, isNumeric, isNonEmptyString, hasAll, isPlainObj };
