require('./apn');
module.exports = angularportalazure;

// TODO: 2016-10-25/hp: maybe we should use someting like this and change our code from [global] to [umd]
/// https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["libName"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("libName"));
    } else {
        root.returnExports = factory(root.libName);
    }
}(this, function (b) { console.log(b); }))