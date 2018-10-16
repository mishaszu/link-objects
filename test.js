const newObj = require('./index');
const assert = require('assert');

const test = {
    value: 'test'
}

const testNew = newObj(test, {nextValue: 'test2'});

assert(testNew.value === test.value, `New object doesn't link source object propertie`);
assert(testNew.nextValue === 'test2', `New object doesn't create next key`);
