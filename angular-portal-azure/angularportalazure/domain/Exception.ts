/// <reference path="exceptiondotnet.ts" />
namespace angularportalazure {
    export class Exception extends angularportalazure.ValidationsExceptionDotNet {
        //#region Properites

        // HTTP Server
        Type: string;
        MessageDetail: string;
        Messages: string[];
        Status: number | undefined;
        StatusText: string | undefined;
        Url: string;

        //#endregion

        //#region Static Methods

        static getOneLineMessage(exception: angularportalazure.Exception): string {
            let message: string = 'FEHLER ';

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
                    } else {
                        message = message + ': ' + exception.InnerException.ExceptionMessage + ' ';
                    }
                }
            }

            if (exception.Messages !== undefined) {
                exception.Messages.forEach((item) => {
                    message = message + '- ' + item + ' ';
                });
            }

            if (message === 'FEHLER ') {
                message = message + ' : JavaScript-Fehler oder Probleme mit der Internetverbindung. Ggf. weitere Informationen im Log. ' + exception;
                console.log(exception);
            }

            return message;
        }

        // TODO:2017-01-09/hp: [any] will be [Response] in angular2
        static prepareException(response: angular.IHttpPromiseCallbackArg<angularportalazure.Exception> | any): angularportalazure.Exception {
            console.log('angularportalazure.Exception.prepareException - Logging Exception: Find more information in the following console messages for [Responsee] and [Exception].');
            let exception: angularportalazure.Exception = new angularportalazure.Exception();

            if (response.headers === undefined) {
                console.log('> Get information from [processDotNetException1.data].');
                exception = Exception.processDotNetException1(response);
            } else {
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
        }

        private static processDotNetException1(response: angular.IHttpPromiseCallbackArg<angularportalazure.Exception>): angularportalazure.Exception {
            let exception: angularportalazure.Exception = new angularportalazure.Exception();

            //#region Convert data to Messages

            exception.Messages = [];

            if (response.data.Data === undefined) {
                exception.Messages.push('No further information found in [response.data.Data].');
            } else {

                let i = 1;
                while (response.data.Data[i + ''] !== undefined) {
                    exception.Messages.push(response.data.Data[i + '']);
                    i++;
                }
            }

            //#endregion

            return exception;
        }

        // TODO:2017-01-09/hp: Implement this function for angular2
        private static processDotNetException2(response: any): angularportalazure.Exception {
            let exception: angularportalazure.Exception = new angularportalazure.Exception();

            if (response.json().data !== undefined) {
                console.log('[angularportalazure.Exception.processDotNetException2] not implemented. Implement it to get proper exception data.');
            }

            return exception;
        }

        //#endregion
    }
}
