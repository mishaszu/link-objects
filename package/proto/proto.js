const { curry } = require('ramda');
const { link } = require('../link');

const proto = {
    extend(x) {
        return link(this)(x);
    }
}
const linker = x => Object.assign(Object.create(proto), x);

module.exports = linker;