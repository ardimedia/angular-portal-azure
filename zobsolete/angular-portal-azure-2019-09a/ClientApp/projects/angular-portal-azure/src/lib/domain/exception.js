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
var exception_dot_net_1 = require("./exception-dot-net");
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    function Exception() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // #endregion
    // #region Static Methods
    Exception.getOneLineMessage = function (exception) {
        var message = '';
        if (exception.Message !== undefined) {
            if (exception.Message.toLowerCase().indexOf('cannot insert duplicate key in object') >= 0
                || exception.Message.toLowerCase().indexOf('the duplicate key value is') >= 0) {
                console.debug(exception.Message);
                return 'Datensatz mit gleichem Key (SchlÃ¼ssel) bereits vorhanden!';
            }
            if (exception.Message.toLowerCase().indexOf('the delete statement conflicted with the reference constraint') >= 0) {
                console.debug(exception.Message);
                return 'Datensatz kann nicht gelÃ¶scht werden, da noch abhÃ¤ngige Daten vorhanden sind!';
            }
            if (exception.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                // Frist innerException
                var innerException = exception.InnerException;
                if (exception.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                    // Second innerException
                    var innerException_1 = exception.InnerException.InnerException;
                    if (exception.InnerException.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                        // Third innerException
                        var innerException_2 = exception.InnerException.InnerException.InnerException;
                    }
                }
                console.debug(exception);
                return innerException.Message;
            }
            message = message + exception.Message + ' ';
            return message;
        }
        if (exception.Messages !== undefined) {
            if (exception.Messages.length > 0) {
                message = '';
                exception.Messages.forEach(function (item, index) {
                    if (index > 0) {
                        message = message + ' - ';
                    }
                    message = message + item;
                });
                return message;
            }
        }
        if (exception.ExceptionMessage !== undefined && exception.ExceptionMessage.toLowerCase().indexOf('see the inner exception for details') < 0) {
            message = message + ': ' + exception.ExceptionMessage + ' ';
            return message;
        }
        if (exception.ExceptionMessage !== undefined && exception.ExceptionMessage.toLowerCase().indexOf('see the inner exception for details') >= 0) {
            if (exception.InnerException !== undefined) {
                if (exception.InnerException.InnerException !== undefined) {
                    message = message + ': ' + exception.InnerException.InnerException.ExceptionMessage + ' ';
                    return message;
                }
                else {
                    message = message + ': ' + exception.InnerException.ExceptionMessage + ' ';
                    return message;
                }
            }
        }
        // Default handler
        console.debug(exception);
        message = message + ': JavaScript-Fehler oder Probleme mit der Internetverbindung. Weitere Informationen im Log (change log to full = debug). ' + exception;
        return message;
    };
    // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<Exception>] should be Response
    Exception.prepareException = function (response) {
        var exception = Exception.createException();
        // #region Process (Angular 1) response.data.Data
        if (response.data !== undefined && response.data.Data !== undefined) {
            exception = Exception.processResponseData(exception, response.data.Data);
        }
        // #endregion
        // #region Process (Angular 2) response.json().Data (EntityValidationException, etc.)
        else if (response.json !== undefined && response.json().Data != undefined) {
            exception = Exception.processResponseData(exception, response.json().Data);
        }
        // #endregion
        // #region Process (Angular 2) response._body
        else if (response._body !== undefined) {
            var body = JSON.parse(response._body);
            if (body.Message) {
                exception.Message = body.Message;
            }
        }
        // #endregion
        // #region Process (Angular 2) response.InnerException.InnerException.Message
        else if (response.json !== undefined && response.json !== null
            && response.json().InnerException !== undefined && response.json().InnerException !== null
            && response.json().InnerException.InnerException !== undefined && response.json().InnerException.InnerException !== null) {
            exception.Message = response.json().InnerException.InnerException.Message;
        }
        // #endregion
        //exception.convertResponse(response);
        exception.Url = response.url;
        exception.Status = response.status;
        exception.StatusText = response.statusText;
        return exception;
    };
    Exception.createException = function () {
        var exception = new Exception();
        exception.Messages = [];
        return exception;
    };
    //private static processResponseWithData(exception: Exception, response: angular.IHttpPromiseCallbackArg<Exception>): Exception {
    //    console.debug('Exception.processResponseWithData');
    //    // #region Convert data to Messages
    //    if (response.data.Data === undefined) {
    //        exception.Messages.push('No further information found in [response.data.Data].');
    //        exception.Messages.push('No further information found in [response.data.Data].');
    //    } else {
    //        let i = 1;
    //        while (response.data.Data[i + ''] !== undefined) {
    //            console.debug('Add to exception.Messages : ' + response.data.Data[i + '']);
    //            exception.Messages.push(response.data.Data[i + '']);
    //            i++;
    //        }
    //    }
    //    // #endregion
    //    return exception;
    //}
    Exception.processResponseData = function (exception, data) {
        var i = 1;
        while (data[i + ''] !== undefined) {
            exception.Messages.push(data[i + '']);
            i++;
        }
        return exception;
    };
    return Exception;
}(exception_dot_net_1.ValidationsExceptionDotNet));
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map