const _ = require('lodash');

function capitalize(s) { return _.capitalize(s); }
function truncate(s, len) { return _.trunc(s, len); }
function pad(s, len) { return _.pad(s, len); }
function repeat(s, n) { return _.repeat(s, n); }
function trim(s) { return _.trim(s); }

module.exports = { capitalize, truncate, pad, repeat, trim };
