// #region Declarations

/// <reference path="exceptiondotnet.ts" />

// #endregion

namespace angularportalazure {
    export class Exception extends angularportalazure.ValidationsExceptionDotNet {
        // #region Properties

        // HTTP Server
        Type: string;
        MessageDetail: string;
        Messages: string[];
        Status: number | undefined;
        StatusText: string | undefined;
        Url: string;

        // #endregion

        // #region Static Methods

        static getOneLineMessage(exception: angularportalazure.Exception): string {
            let message: string = 'FEHLER ';

            if (exception.Message !== undefined) {
                if (exception.Message.toLowerCase().indexOf('cannot insert duplicate key in object') >= 0
                    || exception.Message.toLowerCase().indexOf('the duplicate key value is') >= 0) {
                    console.debug(exception.Message);
                    return 'Datensatz mit gleichem Key (Schlüssel) bereits vorhanden!';
                }

                if (exception.Message.toLowerCase().indexOf('the delete statement conflicted with the reference constraint') >= 0) {
                    console.debug(exception.Message);
                    return 'Datensatz kann nicht gelöscht werden, da noch abhängige Daten vorhanden sind!';
                }

                message = message + exception.Message + ' ';
            }

            if (exception.Messages !== undefined) {
                if (exception.Messages.length > 0) {
                    message = '';
                    exception.Messages.forEach((item, index) => {
                        if (index > 0) {
                            message = message + ' - ';
                        }
                        message = message + item;
                    });
                }
            }

            if (exception.ExceptionMessage !== undefined && (<string>exception.ExceptionMessage).toLowerCase().indexOf('see the inner exception for details') < 0) {
                message = message + ': ' + exception.ExceptionMessage + ' ';
            }

            if (exception.ExceptionMessage !== undefined && (<string>exception.ExceptionMessage).toLowerCase().indexOf('see the inner exception for details') >= 0) {
                if (exception.InnerException !== undefined) {
                    if (exception.InnerException.InnerException !== undefined) {
                        message = message + ': ' + exception.InnerException.InnerException.ExceptionMessage + ' ';
                    } else {
                        message = message + ': ' + exception.InnerException.ExceptionMessage + ' ';
                    }
                }
            }

            if (message === 'FEHLER ') {
                message = message + ': JavaScript-Fehler oder Probleme mit der Internetverbindung. Weitere Informationen im Log. ' + exception;
            }

            return message;
        }

        // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<angularportalazure.Exception>] should be Response
        static prepareException(response: angular.IHttpPromiseCallbackArg<angularportalazure.Exception> | any): angularportalazure.Exception {
            let exception = angularportalazure.Exception.createException();

            // #region Process (Angular 1) response.data.Data

            if (response.data !== undefined && response.data.Data !== undefined) {
                exception = angularportalazure.Exception.processResponseData(exception, response.data.Data);
            }

            // #endregion

            // #region Process (Angular 2) response.json().Data (EntityValidationException, etc.)

            else if (response.json !== undefined && response.json().Data != undefined) {
                exception = angularportalazure.Exception.processResponseData(exception, response.json().Data);
            }

            // #endregion

            // #region Process (Angular 2) response.InnerException.InnerException.Message

            else if (response.json !== undefined && response.json().InnerException !== undefined && response.json().InnerException.InnerException !== undefined) {
                exception.Message = response.json().InnerException.InnerException.Message;
            }

            // #endregion

            //exception.convertResponse(response);

            exception.Url = response.url;
            exception.Status = response.status;
            exception.StatusText = response.statusText;

            return exception;
        }

        private static createException(): angularportalazure.Exception {
            let exception: angularportalazure.Exception = new angularportalazure.Exception();
            exception.Messages = [];
            return exception;
        }

        //private static processResponseWithData(exception: angularportalazure.Exception, response: angular.IHttpPromiseCallbackArg<angularportalazure.Exception>): angularportalazure.Exception {
        //    console.debug('angularportalazure.Exception.processResponseWithData');
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

        private static processResponseData(exception: angularportalazure.Exception, data: any[]): angularportalazure.Exception {
            let i = 1;
            while (data[i + ''] !== undefined) {
                exception.Messages.push(data[i + '']);
                i++;
            }

            return exception;
        }

        // TODO:2017-01-09/hp: Implement this function for angular2
        //private static processDotNetException2(exception: angularportalazure.Exception, response: any): angularportalazure.Exception {
        //    console.debug('angularportalazure.Exception.processDotNetException2');

        //    if (response.json().data !== undefined) {
        //        console.debug('[angularportalazure.Exception.processDotNetException2] not implemented. Implement it to get proper exception data.');
        //    }

        //    return exception;
        //}

        // #endregion
    }
}
