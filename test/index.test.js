const arrays = require('../src/arrays');
const objects = require('../src/objects');
const strings = require('../src/strings');
const collections = require('../src/collections');
const transforms = require('../src/transforms');
const validators = require('../src/validators');
const formatters = require('../src/formatters');
const parsers = require('../src/parsers');
const aggregators = require('../src/aggregators');

let passed = 0, failed = 0;
function assert(c, m) { if (c) { passed++; console.log(`  ✓ ${m}`); } else { failed++; console.log(`  ✗ ${m}`); } }

console.log('arrays...');
assert(arrays.getFirst([1,2,3]) === 1, 'getFirst');
assert(arrays.getRest([1,2,3]).length === 2, 'getRest');
assert(JSON.stringify(arrays.getNames([{name:'a'},{name:'b'}])) === '["a","b"]', 'getNames');
assert(arrays.unique([1,1,2]).length === 2, 'unique');
assert(arrays.flatten([[1],[2,3]]).length === 3, 'flatten');

console.log('objects...');
assert(objects.toPairs({a:1}).length === 1, 'toPairs');
assert(objects.fromEntries([['a',1]]).a === 1, 'fromEntries');
assert(objects.pick({a:1,b:2}, ['a']).a === 1, 'pick');
assert(objects.omit({a:1,b:2}, ['a']).b === 2, 'omit');
assert(objects.merge({a:1}, {b:2}).b === 2, 'merge');

console.log('strings...');
assert(strings.capitalize('hello') === 'Hello', 'capitalize');
assert(typeof strings.truncate('hello world', 5) === 'string', 'truncate');
assert(typeof strings.pad('hi', 10) === 'string', 'pad');
assert(strings.repeat('a', 3) === 'aaa', 'repeat');
assert(strings.trim('  hi  ') === 'hi', 'trim');

console.log('collections...');
assert(collections.hasItem([1,2,3], 2) === true, 'hasItem true');
assert(collections.hasItem([1,2], 5) === false, 'hasItem false');
assert(collections.findWhere([{a:1},{a:2}], {a:2}).a === 2, 'findWhere');
assert(JSON.stringify(collections.pluckField([{x:1},{x:2}], 'x')) === '[1,2]', 'pluckField');
assert(typeof collections.groupByField([{g:'a'},{g:'b'},{g:'a'}], 'g') === 'object', 'groupBy');
assert(collections.sortByField([{n:3},{n:1},{n:2}], 'n')[0].n === 1, 'sortBy');

console.log('transforms...');
assert(transforms.mapValues({a:1,b:2}, v => v*2).a === 2, 'mapValues');
assert(transforms.invertObj({a:'b'}).b === 'a', 'invert');
assert(transforms.defaults({a:1}, {a:0,b:2}).b === 2, 'defaults');
assert(transforms.cloneObj({a:{b:1}}).a.b === 1, 'cloneDeep');

console.log('validators...');
assert(validators.isEmpty([]) === true, 'isEmpty array');
assert(validators.isEmpty({}) === true, 'isEmpty object');
assert(validators.isNumeric(42) === true, 'isNumeric');
assert(validators.isNumeric(NaN) === false, 'isNumeric NaN');
assert(validators.isNonEmptyString('hi') === true, 'isNonEmptyString');
assert(validators.isNonEmptyString('') === false, 'isNonEmptyString empty');
assert(validators.hasAll([1,2,3], [1,2]) === true, 'hasAll');
assert(validators.isPlainObj({}) === true, 'isPlainObj');

console.log('formatters...');
const table = formatters.toTable([{a:1,b:2}]);
assert(table.headers.length === 2, 'toTable headers');
assert(formatters.toKeyValue({x:1,y:2}).includes('x=1'), 'toKeyValue');
const summary = formatters.summarize([{v:1},{v:2},{v:1}], 'v');
assert(summary.count === 3, 'summarize count');
assert(summary.unique === 2, 'summarize unique');

console.log('parsers...');
const csv = parsers.parseCSV('name,age\nAlice,30\nBob,25');
assert(csv.length === 2, 'parseCSV rows');
assert(csv[0].name === 'Alice', 'parseCSV field');
const kv = parsers.parseKeyValue('a=1,b=2');
assert(kv.a === '1', 'parseKeyValue');

console.log('aggregators...');
assert(aggregators.sum([1,2,3]) === 6, 'sum');
assert(aggregators.avg([2,4]) === 3, 'avg');
assert(aggregators.min([3,1,2]) === 1, 'min');
assert(aggregators.max([3,1,2]) === 3, 'max');
assert(aggregators.topN([{s:1},{s:3},{s:2}], 's', 2).length === 2, 'topN');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
