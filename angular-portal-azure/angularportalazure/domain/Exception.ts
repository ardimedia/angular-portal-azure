/// <reference path="debug.ts" />

namespace angularportalazure {
    export class Exception implements angularportalazure.IExceptionDotNet {
        //#region Properites

        ExceptionType: string;              // provided by the server
        ClassName: string;                  // provided by the server - .NET exception class name
        Data: Object;                       // provided by the server - object having trouble
        Type: string;                       // provided by the server
        Messages: string[];                 // provided by the server

        Message: string;                    // provided by the server or filled by the client if empty - .NET exception messages or user defined

        MessageDetail: string;              // Filled by the client - .NET exception detail message
        Status: number | undefined;         // Filled by the client - http error code
        StatusText: string | undefined;     // Filled by the client - http message
        Url: string;                        // Filled by the client - http URL

        //#endregion

        processException(response: angular.IHttpPromiseCallbackArg<any>) {
            var that = this;

            this.convertFromWebApiException(response.data);

            that.ExceptionType = response.data.ExceptionType;
            that.Type = response.data.Type;
            that.Message = response.data.Message;
            that.MessageDetail = response.data.MessageDetail;
            that.Messages = response.data.Messages;

            that.Url = response.config.url;
            that.Status = response.status;
            that.StatusText = response.statusText;

            // Find a better way to log information, maybe to the database or to Google Analytics.
            console.log('processException:');
            console.log(response);
            console.log(that);
        }

        convertFromWebApiException(ex: angularportalazure.IExceptionDotNet): void {
            //#region Process data to Messages

            ex.Messages = [];
            var i = 1;
            while (ex.Data[i + ''] !== undefined) {
                ex.Messages.push(ex.Data[i + '']);
                i++;
            }

            //#endregion

            //#region Process DbEntityValidationException

            if (ex.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
                ex.Type = 'DbEntityValidationException';
            }

            //#endregion

            //#region Process DbUpdateConcurrencyException

            if (ex.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
                ex.Type = 'DbUpdateConcurrencyException';
            }

            //#endregion

            //#region Process ValidationsException

            // ClassName should by ExceptionType
            if (ex.ClassName.indexOf('ValidationsException') > 0) {
                ex.Type = 'ValidationsException';
            }

            //#endregion
        }
    }
}
