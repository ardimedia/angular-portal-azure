namespace angularportalazure {
    export class ValidationResultDotNet {
        ErrorMessage: string;
        MemberNames: string[];
    }

    export class ExceptionDotNet {
        // .NET Exception (the following fields are transmitted over the wire)
        ClassName: string | void;
        Data: { key: number, value: string }[] | null;
        ExceptionMethod: string | void;
        HelpURL: string | null | void;
        HelpLink: string | null | void;
        HResult: number;
        InnerException: ExceptionDotNet | null;
        Message: string | null;
        RemoteStackIndex: number | void;
        RemoteStackTraceString: string | null | void;
        Source: string;
        StackTrace: string;
        WatsonBuckets: string | null | void;

        /**
         *  @deprecated ExceptionMessage is obsolete
         */
        ExceptionMessage: string | void;
        /**
         *  @deprecated ExceptionType is obsolete
         */
        ExceptionType: string | void;
    }

    export class ArgumentNullException extends ExceptionDotNet {
        ParamName: string;
    }

    export class EntityValidationException extends ExceptionDotNet {
        Data: { key: number, value: string }[];
        ValidationResults: ValidationResultDotNet[];

        //public convertResponse(response: any) {
        //    if (response.headers === undefined) {
        //        console.debug('angularportalazure.EntityValidationException.convertResponse - response.data');
        //        ValidationsExceptionDotNet.convertResponse(this, response.data);
        //        ValidationsExceptionDotNet.convertExceptionType(this, response.data);
        //    } else {
        //        console.debug('angularportalazure.EntityValidationException.convertResponse - response.json()');
        //        ValidationsExceptionDotNet.convertResponse(this, response.json());
        //        ValidationsExceptionDotNet.convertExceptionType(this, response.json());
        //    }
        //}

        //protected static convertResponse(exceptionTo: EntityValidationException | ValidationsExceptionDotNet, responseDataFrom: ExceptionDotNet): void {
        //    console.debug('angularportalazure.EntityValidationException.convertResponse');

        //    exceptionTo.ExceptionMessage = responseDataFrom.ExceptionMessage;
        //    exceptionTo.Message = responseDataFrom.Message;
        //    exceptionTo.StackTrace = responseDataFrom.StackTrace;
        //    exceptionTo.InnerException = responseDataFrom.InnerException;
        //}

        //protected static convertExceptionType(exception: EntityValidationException | ValidationsExceptionDotNet, responseData: any): void {
        //    if (responseData.ExceptionType === undefined) {
        //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - undefined');
        //        return;
        //    }
        //    else if (responseData.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
        //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - DbEntityValidationException');
        //        exception.ExceptionType = 'DbEntityValidationException';
        //        return;
        //    }
        //    else if (responseData.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
        //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - DbUpdateConcurrencyException');
        //        exception.ExceptionType = 'DbUpdateConcurrencyException';
        //        return;
        //    }
        //    else if (responseData.ClassName !== undefined && responseData.ClassName.indexOf('ValidationsException') > 0) {
        //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - ValidationsException');
        //        exception.ExceptionType = 'ValidationsException';
        //        return;
        //    }
        //    else {
        //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - else');
        //        exception.ExceptionType = responseData.ExceptionType;
        //    }
        //}
    }

    /**
     *  @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
     */
    export class ValidationsExceptionDotNet extends EntityValidationException {
    }
}
