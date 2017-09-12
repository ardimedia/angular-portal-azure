"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exceptiondotnet_1 = require("./exceptiondotnet");
var ValidationsExceptionDotNet = (function (_super) {
    __extends(ValidationsExceptionDotNet, _super);
    function ValidationsExceptionDotNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidationsExceptionDotNet.prototype.convertResponse = function (response) {
        if (response.headers === undefined) {
            ValidationsExceptionDotNet.convertResponse(this, response.data);
            ValidationsExceptionDotNet.convertExceptionType(this, response.data);
        }
        else {
            ValidationsExceptionDotNet.convertResponse(this, response.json());
            ValidationsExceptionDotNet.convertExceptionType(this, response.json());
        }
    };
    ValidationsExceptionDotNet.convertResponse = function (exception, responseData) {
        // ExceptionDotNet
        exception.ExceptionMessage = responseData.ExceptionMessage;
        exception.Message = responseData.Message;
        exception.StackTrace = responseData.StackTrace;
        exception.InnerException = responseData.InnerException;
        // ValidationsExceptionDotNet
        // exception.ClassName = 'Not yet implemented';
        // exception.Data = [{ key: 0, value: 'Not yet implemented' }];
        // ValidationResultDotNet
        // exception.ValidationResults = [{ ErrorMessage: 'Not yet implemented', MemberNames: [] }];
    };
    ValidationsExceptionDotNet.convertExceptionType = function (exception, responseData) {
        if (responseData.ExceptionType === undefined) {
            return;
        }
        if (responseData.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
            exception.ExceptionType = 'DbEntityValidationException';
            return;
        }
        else if (responseData.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
            exception.ExceptionType = 'DbUpdateConcurrencyException';
            return;
        }
        // ClassName should by ExceptionType
        if (responseData.ClassName !== undefined && responseData.ClassName.indexOf('ValidationsException') > 0) {
            console.log('[angularportalazure.Exception.setExceptionType2] Why is this in ClassName? Can this be changed?');
            exception.ExceptionType = 'ValidationsException';
            return;
        }
        exception.ExceptionType = responseData.ExceptionType;
    };
    return ValidationsExceptionDotNet;
}(exceptiondotnet_1.ExceptionDotNet));
exports.ValidationsExceptionDotNet = ValidationsExceptionDotNet;
