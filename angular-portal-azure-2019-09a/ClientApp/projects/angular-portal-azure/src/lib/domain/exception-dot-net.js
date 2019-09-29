"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationResultDotNet = /** @class */ (function () {
    function ValidationResultDotNet() {
    }
    return ValidationResultDotNet;
}());
exports.ValidationResultDotNet = ValidationResultDotNet;
var ExceptionDotNet = /** @class */ (function () {
    function ExceptionDotNet() {
    }
    return ExceptionDotNet;
}());
exports.ExceptionDotNet = ExceptionDotNet;
var ArgumentNullException = /** @class */ (function (_super) {
    __extends(ArgumentNullException, _super);
    function ArgumentNullException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ArgumentNullException;
}(ExceptionDotNet));
exports.ArgumentNullException = ArgumentNullException;
var EntityValidationException = /** @class */ (function (_super) {
    __extends(EntityValidationException, _super);
    function EntityValidationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EntityValidationException;
}(ExceptionDotNet));
exports.EntityValidationException = EntityValidationException;
/**
 *  @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
 */
var ValidationsExceptionDotNet = /** @class */ (function (_super) {
    __extends(ValidationsExceptionDotNet, _super);
    function ValidationsExceptionDotNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValidationsExceptionDotNet;
}(EntityValidationException));
exports.ValidationsExceptionDotNet = ValidationsExceptionDotNet;
//# sourceMappingURL=exception-dot-net.js.map