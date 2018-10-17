const link = require('./link');
const assert = require('assert');

console.log('Start testing link');
const msg1 = `Link doesn't link 2 objects properly, `;
const msg2 = `can't access proto variable`;
const msg3 = `own function doesn't work`;
const msg4 = `linked function doesn't work`


const test1 = {
    value: 'test',
    test: 1,
    go() { return this.value },
    tester() { return this.test}
}

const test2 = link(test1)({
    value2: 'test2',
    test: 2,
    fly() { return this.value2 },
    tester() { return this.test }
})

assert(test2.value === test1.value, `${msg1}${msg2}`);
assert(test2.tester() === 2, `${msg1}${msg3}`);
assert(test2.go() === test1.value, `${msg1}${msg4}`);
console.log('Test link successfully');