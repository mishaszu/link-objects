module.exports = {
    nObj: function( sourceObject, properties ) {
        return Object.assign(
            Object.create(sourceObject),
            properties
        );
    },
    nObjFn: function( sourceObject ) {
        return function( properties ) {
            return Object.assign(
                Object.create(sourceObject),
                properties
            );
        }
    },
}
