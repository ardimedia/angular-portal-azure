/// <reference path="exceptiondotnet.ts" />
namespace angularportalazure {
    export class Exception extends angularportalazure.ValidationsExceptionDotNet {
        //#region Properites

        // IExceptionDotNet
        ExceptionMessage: string;
        ExceptionType: string;
        Message: string;
        StackTrace: string;

        // HTTP Server
        Type: string;
        MessageDetail: string;
        Messages: string[];
        Status: number | undefined;
        StatusText: string | undefined;
        Url: string;


        //#endregion

        //#region Static Methods

        // TODO:2017-01-09/hp: [any] will be [Response] in angular2
        static prepareException(response: angular.IHttpPromiseCallbackArg<angularportalazure.Exception> | any): angularportalazure.Exception {
            console.log('angularportalazure.Exception.prepareException - Logging Exception: Find more information in [Responsee] and [Exception] below. [Exception] does contain data from [Response.]')
            let exception: angularportalazure.Exception = new angularportalazure.Exception();

            if (response.headers === undefined) {
                exception = Exception.processDotNetException1(response);

                exception.ExceptionMessage = response.data.ExceptionMessage;
                exception.StackTrace = response.data.StackTrace;

                Exception.setExceptionType1(response, exception);
                exception.Type = response.data.Type;
                exception.Message = response.data.Message;
                exception.MessageDetail = response.data.MessageDetail;
                exception.Messages = response.data.Messages;

                exception.Url = response.config.url;
                exception.Status = response.status;
                exception.StatusText = response.statusText;
            } else {
                exception = Exception.processDotNetException2(response);

                exception.ExceptionMessage = response.json().ExceptionMessage;
                exception.StackTrace = response.json().StackTrace;

                Exception.setExceptionType2(response, exception);
                exception.Type = response.json().Type;
                exception.Message = response.json().Message;
                exception.MessageDetail = response.json().MessageDetail;
                exception.Messages = response.json().Messages;

                exception.Url = response.url;
                exception.Status = response.status;
                exception.StatusText = response.statusText;
            }

            //// Find a better way to log information, maybe to the database or to Google Analytics.
            console.log(response)
            console.log(exception)

            return exception;
        }

        static getOneLineMessage(exception: angularportalazure.Exception): string {
            let message: string = 'FEHLER ';

            if (exception.Message !== undefined) {
                message = message + ': ' + exception.Message + ' ';
            }

            if (exception.ExceptionMessage !== undefined) {
                message = message + ': ' + exception.ExceptionMessage + ' ';
            }

            if (exception.Messages !== undefined) {
                exception.Messages.forEach((item) => {
                    message = message + '- ' + item + ' ';
                });
            }

            return message;
        }

        private static processDotNetException1(response: angular.IHttpPromiseCallbackArg<angularportalazure.Exception>): angularportalazure.Exception {
            let exception: angularportalazure.Exception = new angularportalazure.Exception();

            //#region Convert data to Messages

            exception.Messages = [];
            let i = 1;
            while (response.data.Data[i + ''] !== undefined) {
                exception.Messages.push(response.data.Data[i + '']);
                i++;
            }

            //#endregion

            return exception;
        }

        // TODO:2017-01-09/hp: Implement this function for angular2
        private static processDotNetException2(response: any): angularportalazure.Exception {
            let exception: angularportalazure.Exception = new angularportalazure.Exception();

            if (response.json().data !== undefined) {
                console.log('[angularportalazure.Exception.processDotNetException2] not yet implemented. Implement it to get proper exception data.');
            }

            return exception;
        }

        private static setExceptionType1(response: angular.IHttpPromiseCallbackArg<angularportalazure.Exception>, exception: angularportalazure.Exception): void {
            if (response.data.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
                exception.ExceptionType = 'DbEntityValidationException';
                return;
            } else if (response.data.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
                exception.ExceptionType = 'DbUpdateConcurrencyException';
                return;
            } else if (response.data.ClassName.indexOf('ValidationsException') > 0) {
                // ClassName should by ExceptionType
                exception.ExceptionType = 'ValidationsException';
                return;
            }

            exception.ExceptionType = response.data.ExceptionType;
        }

        // TODO:2017-01-09/hp: Implement this function for angular2
        private static setExceptionType2(response: any, exception: angularportalazure.Exception): void {
            if (response.json().ExceptionType === undefined) {
                return;
            }

            if (response.json().ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
                exception.ExceptionType = 'DbEntityValidationException';
                return;
            } else if (response.json().ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
                exception.ExceptionType = 'DbUpdateConcurrencyException';
                return;
            }

            // ClassName should by ExceptionType
            if (response.json().ClassName !== undefined && response.json().ClassName.indexOf('ValidationsException') > 0) {
                console.log('[angularportalazure.Exception.setExceptionType2] Why is this in ClassName? Can this be changed?');
                exception.ExceptionType = 'ValidationsException';
                return;
            }

            exception.ExceptionType = response.json().ExceptionType;
        }

        //#endregion
    }
}
