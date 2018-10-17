const linker = require('./proto');
const assert = require('assert');

console.log('Start testing proto');

const msg1 = `Proto doesn't link 2 objects properly, `;
const msg2 = `can't access proto variable`;
const msg3 = `own function doesn't work`;
const msg4 = `linked function doesn't work`

const test1 = linker({
    value: 'test1',
    test: 1,
    go() {return this.value},
    tester() { return this.test},
});

const test2 = test1.extend({
    test: 2,
});

assert(test2.value === test1.value, `${msg1}${msg2}`);
assert(test2.tester() === 2, `${msg1}${msg3}`);
assert(test2.go() === test1.value, `${msg1}${msg4}`);
console.log('Test proto successfully');