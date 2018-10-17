# link-objects
As Javascript developer you should now that 'class' keyword is just code sugar for linking objects together. Prototypal inheritance is powerful and it's pity to waste it potential. Instead of reusing OO patterns, better use [OLOO](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch6.md#delegation-theory)!

## Pure prototypal inheritance
No 'new', no 'class', link your objects freely.

## api

#### **- link**
```js
link(sourceObject)(extendingValues);
```
```js
const test = {
    value1: 'test',
    value2: 'test2',
    tester1() { return this.value1 },
    tester2() { return this.value2 },
}
const linked = link(test)({
    beyond: true,
    value2: 'new value',
})
linked.beyond // true
linked.tester1() // test
linked.tester2() // new value
```

#### **- linker**
```js
const test = linker(sourceObject);
test.extend(extendingValues);
```
```js
const test = linker({
    value1: 'test',
    value2: 'test2',
    tester1() { return this.value1 },
    tester2() { return this.value2 },
});
const linked = test.extend({
    beyond: true,
    value2: 'new value',
})
linked.beyond // true
linked.tester1() // test
linked.tester2() // new value
```