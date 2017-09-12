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
var validationsexceptiondotnet_1 = require("./validationsexceptiondotnet");
var Exception = (function (_super) {
    __extends(Exception, _super);
    function Exception() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // #endregion
    // #region Static Methods
    Exception.getOneLineMessage = function (exception) {
        var message = 'FEHLER ';
        if (exception.Message !== undefined) {
            message = message + ': ' + exception.Message + ' ';
        }
        if (exception.ExceptionMessage !== undefined && exception.ExceptionMessage.toLowerCase().indexOf('see the inner exception for details') === -1) {
            message = message + ': ' + exception.ExceptionMessage + ' ';
        }
        if (exception.ExceptionMessage !== undefined && exception.ExceptionMessage.toLowerCase().indexOf('see the inner exception for details') > 0) {
            if (exception.InnerException !== undefined) {
                if (exception.InnerException.InnerException !== undefined) {
                    message = message + ': ' + exception.InnerException.InnerException.ExceptionMessage + ' ';
                }
                else {
                    message = message + ': ' + exception.InnerException.ExceptionMessage + ' ';
                }
            }
        }
        if (exception.Messages !== undefined) {
            exception.Messages.forEach(function (item) {
                message = message + '- ' + item + ' ';
            });
        }
        if (message === 'FEHLER ') {
            message = message + ' : JavaScript-Fehler oder Probleme mit der Internetverbindung. Ggf. weitere Informationen im Log. ' + exception;
            console.log(exception);
        }
        return message;
    };
    // TODO:2017-01-09/hp: [any] will be [Response] in angular2
    Exception.prepareException = function (response) {
        console.log('Exception.prepareException - Logging Exception: Find more information in the following console messages for [Responsee] and [Exception].');
        var exception = new Exception();
        if (response.headers === undefined) {
            console.log('> Get information from [processDotNetException1.data].');
            exception = Exception.processDotNetException1(response);
        }
        else {
            console.log('> Get information from [processDotNetException2.json()].');
            exception = Exception.processDotNetException2(response);
        }
        exception.convertResponse(response);
        exception.Url = response.url;
        exception.Status = response.status;
        exception.StatusText = response.statusText;
        //// Find a better way to log information, maybe to the database or to Google Analytics.
        console.log(response);
        console.log(exception);
        return exception;
    };
    Exception.processDotNetException1 = function (response) {
        var exception = new Exception();
        // #region Convert data to Messages
        exception.Messages = [];
        if (response.data.Data === undefined) {
            exception.Messages.push('No further information found in [response.data.Data].');
        }
        else {
            var i = 1;
            while (response.data.Data[i + ''] !== undefined) {
                exception.Messages.push(response.data.Data[i + '']);
                i++;
            }
        }
        // #endregion
        return exception;
    };
    // TODO:2017-01-09/hp: Implement this function for angular2
    Exception.processDotNetException2 = function (response) {
        var exception = new Exception();
        if (response.json().data !== undefined) {
            console.log('[Exception.processDotNetException2] not implemented. Implement it to get proper exception data.');
        }
        return exception;
    };
    return Exception;
}(validationsexceptiondotnet_1.ValidationsExceptionDotNet));
exports.Exception = Exception;
