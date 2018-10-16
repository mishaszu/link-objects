module.exports = function(
    sourceObject,
    properties
) {
    return Object.assign(
        Object.create(sourceObject),
        properties
    );
}
