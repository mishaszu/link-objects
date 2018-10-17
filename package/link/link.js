const { curry } = require('ramda');

const link = curry((sourceObject, properties) => Object.assign(
    Object.create(sourceObject),
    properties
));

module.exports = link;