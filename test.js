const { nObj, nObjFn } = require('./index');
const assert = require('assert');

const test = {
    value: 'test'
}
const test2 = {
    value: 'test2'
}

/* --- nObj --- */
const testNew = nObj(test, {nextValue: 'test2'});

assert(testNew.value === test.value, `New object doesn't link source object propertie`);
assert(testNew.nextValue === 'test2', `New object doesn't create next key`);

/* --- nObjFn --- */
const testNewFn = nObjFn(test);
const testNewFn_1 = testNewFn(test);
const testNewFn_2 = testNewFn(test2);

assert (testNewFn_1.value === test.value, 'new obj function should carry function and create new obj, test 1');
assert (testNewFn_2.value === test2.value, 'new obj function should carry function and create new obj, test 2');
